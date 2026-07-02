
// Render math expressions in an element
function renderMath(el) {
  if (typeof katex === "undefined") return;
  try {
    var els = el.querySelectorAll(".q-text, .q-option span");
    for (var i = 0; i < els.length; i++) {
      var html = els[i].innerHTML;
      if (html.indexOf("$") < 0) continue;
      // Display math ($$...$$)
      var result = html.replace(/\$\$([\s\S]+?)\$\$/g, function(m, c) {
        var math = c.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        try { return katex.renderToString(math, {displayMode: true, throwOnError: false}); } catch(e) { return m; }
      });
      // Inline math ($...$)
      result = result.replace(/\$([^$]+?)\$/g, function(m, c) {
        var math = c.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        try { return katex.renderToString(math, {displayMode: false, throwOnError: false}); } catch(e) { return m; }
      });
      els[i].innerHTML = result;
    }
  } catch(e) {}
}

// 题库训练 - 交互逻辑
var practiceState = {
  questions: [],
  currentIndex: 0,
  answered: false,
  totalAnswered: 0,
  correctCount: 0,
  practiceMode: "practice"
};

function getFilteredQuestions(mode) {
  var topic = document.getElementById("topicFilter").value;
  var difficulty = document.getElementById("difficultyFilter").value;
  mode = mode || practiceState.practiceMode;
  return questionBank.filter(function(q) {
    if (topic !== "all" && q.topic !== topic) return false;
    if (difficulty !== "all" && q.difficulty !== difficulty) return false;
    if (mode === "practice" && q.isGaokao) return false;
    if (mode === "browse" && !q.isGaokao && q.needsVerification === undefined) return false;
    return true;
  });
}

function startPractice() {
  if (typeof questionBank === 'undefined' || !questionBank.length) {
    document.getElementById('questionArea').innerHTML = '<div class="empty-state"><div class="empty-icon">---</div><p>题库加载中，请稍候...</p></div>';
    return;
  }
  practiceState.practiceMode = "practice";
  var filtered = getFilteredQuestions("practice");
  if (filtered.length === 0) {
    document.getElementById("questionArea").innerHTML = '<div class="empty-state"><div class="empty-icon">---</div><p>没有符合条件的精编题</p></div>';
    return;
  }
  practiceState.questions = filtered.slice().sort(function() { return Math.random() - 0.5; });
  practiceState.currentIndex = 0;
  practiceState.totalAnswered = 0;
  practiceState.correctCount = 0;
  practiceState.answered = false;
  document.getElementById("practiceStats").style.display = "flex";
  document.getElementById("modeInfo").innerHTML = '<span style="background:var(--primary);padding:4px 12px;border-radius:20px;font-size:0.85rem;">智能练习模式（含答案验证）</span>';
  updateStats();
  renderQuestion();
}

function startBrowse() {
  if (typeof questionBank === 'undefined' || !questionBank.length) {
    document.getElementById('questionArea').innerHTML = '<div class="empty-state"><div class="empty-icon">---</div><p>题库加载中，请稍候...</p></div>';
    return;
  }
  practiceState.practiceMode = "browse";
  var filtered = getFilteredQuestions("browse");
  if (filtered.length === 0) {
    document.getElementById("questionArea").innerHTML = '<div class="empty-state"><div class="empty-icon">---</div><p>没有符合条件的真题</p></div>';
    return;
  }
  practiceState.questions = filtered.slice().sort(function() { return Math.random() - 0.5; });
  practiceState.currentIndex = 0;
  practiceState.totalAnswered = 0;
  practiceState.correctCount = 0;
  practiceState.answered = false;
  document.getElementById("practiceStats").style.display = "flex";
  document.getElementById("modeInfo").innerHTML = '<span style="background:rgba(255,167,38,0.2);color:var(--warning);padding:4px 12px;border-radius:20px;font-size:0.85rem;">真题浏览模式（来源:高考真题）</span>';
  updateStats();
  renderQuestion();
}

function resetPractice() {
  practiceState.questions = [];
  practiceState.currentIndex = 0;
  practiceState.totalAnswered = 0;
  practiceState.correctCount = 0;
  practiceState.answered = false;
  document.getElementById("practiceStats").style.display = "none";
  document.getElementById("modeInfo").innerHTML = "";
  document.getElementById("questionArea").innerHTML = '<div class="empty-state"><div class="empty-icon">---</div><p>选择知识点和难度，点击开始练习</p></div>';
}

function updateStats() {
  document.getElementById("qNum").textContent = practiceState.totalAnswered;
  document.getElementById("correctNum").textContent = practiceState.correctCount;
  var acc = practiceState.totalAnswered === 0 ? 0 : Math.round(practiceState.correctCount / practiceState.totalAnswered * 100);
  document.getElementById("accuracy").textContent = acc + "%";
}


function esc(str) { return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

function renderQuestion() {
  var area = document.getElementById("questionArea");
  var q = practiceState.questions[practiceState.currentIndex];
  if (!q) { showResults(); return; }
  var stars = { "easy": "\u2605", "medium": "\u2605\u2605", "hard": "\u2605\u2605\u2605" };
  var isGaokao = q.isGaokao === true;
  var html = '<div class="question-card fade-in">';
  html += '<div class="q-header">';
  html += '<span class="q-topic">' + esc(q.topic) + '</span>';
  html += '<span class="q-difficulty">' + stars[q.difficulty] + '</span>';
  html += '</div>';
  if (isGaokao) {
    html += '<div style="background:rgba(255,167,38,0.1);border:1px solid rgba(255,167,38,0.3);border-radius:6px;padding:6px 12px;margin-bottom:12px;font-size:0.85rem;color:var(--warning);">高考真题 - ' + (q.year || "") + "年 - " + (q.source || "") + "</div>";
  }
  html += '<div class="q-text">' + (practiceState.currentIndex + 1) + ". " + esc(q.question) + "</div>";
  if (q.type === "choice") {
    var labels = ["A", "B", "C", "D"];
    html += '<div class="q-options" id="qOptions">';
    for (var i = 0; i < q.options.length; i++) {
      html += '<div class="q-option" data-index="' + i + '" onclick="selectOption(this)">';
      html += '<span class="option-label">' + labels[i] + "</span>";
      html += "<span>" + esc(q.options[i]) + "</span>";
      html += "</div>";
    }
    html += "</div>";
    html += '<div class="q-actions">';
    html += '<button class="btn btn-submit" id="submitBtn" onclick="submitAnswer()" disabled>' + (isGaokao ? "查看信息" : "提交答案") + "</button>";
    html += "</div>";
  } else {
    html += '<div class="q-input-group">';
    html += '<input type="text" id="fillInput" placeholder="输入你的答案...">';
    html += "</div>";
    html += '<div class="q-actions">';
    html += '<button class="btn btn-submit" id="submitBtn" onclick="submitFill()">提交答案</button>';
    html += "</div>";
  }
  html += '<div class="q-feedback" id="qFeedback"></div>';
  html += "</div>";
  area.innerHTML = html;
  practiceState.answered = false;
  setTimeout(function() { renderMath(document.getElementById("questionArea")); }, 100);
}

function selectOption(el) {
  if (practiceState.answered) return;
  var all = document.querySelectorAll(".q-option");
  for (var i = 0; i < all.length; i++) { all[i].classList.remove("selected"); }
  el.classList.add("selected");
  document.getElementById("submitBtn").disabled = false;
}

function submitAnswer() {
  if (practiceState.answered) return;
  var selected = document.querySelector(".q-option.selected");
  if (!selected) return;
  practiceState.answered = true;
  var q = practiceState.questions[practiceState.currentIndex];
  var userAnswer = parseInt(selected.dataset.index);
  var isGaokao = q.isGaokao === true;
  var all = document.querySelectorAll(".q-option");
  for (var i = 0; i < all.length; i++) { all[i].style.pointerEvents = "none"; }
  document.getElementById("submitBtn").disabled = true;
  if (isGaokao) {
    var fb = document.getElementById("qFeedback");
    fb.className = "q-feedback show";
    fb.innerHTML = "<div style='color:var(--text-secondary);'>高考真题 - " + (q.year || "") + "年" + (q.source || "") + (q.explanation || "") + "</div>";
    showNextButton();
    return;
  }
  practiceState.totalAnswered++;
  var correct = userAnswer === q.answer;
  if (correct) { practiceState.correctCount++; }
  for (var i = 0; i < all.length; i++) {
    var idx = parseInt(all[i].dataset.index);
    if (idx === q.answer) { all[i].classList.add("correct"); }
    if (idx === userAnswer && userAnswer !== q.answer) { all[i].classList.add("wrong"); }
  }
  var fb = document.getElementById("qFeedback");
  fb.className = "q-feedback show " + (correct ? "correct" : "wrong");
  fb.innerHTML = (correct ? "回答正确！" : "回答错误") + '<div class="explanation">' + esc(q.explanation) + "</div>";
  showNextButton();
  updateStats();
}

function showNextButton() {
  var actions = document.querySelector(".q-actions");
  if (!actions) return;
  var btn = document.createElement("button");
  btn.className = "btn btn-next";
  btn.textContent = practiceState.currentIndex < practiceState.questions.length - 1 ? "下一题" : "查看结果";
  btn.onclick = nextQuestion;
  actions.appendChild(btn);
}

function nextQuestion() {
  practiceState.currentIndex++;
  if (practiceState.currentIndex >= practiceState.questions.length) { showResults(); }
  else { renderQuestion(); }
}

function showResults() {
  var area = document.getElementById("questionArea");
  var total = practiceState.totalAnswered;
  var correct = practiceState.correctCount;
  var acc = total === 0 ? 0 : Math.round(correct / total * 100);
  var isGaokaoMode = practiceState.practiceMode === "browse";
  var html = '<div class="results-card fade-in">';
  if (isGaokaoMode) {
    html += '<div class="score-label">浏览完成！共 ' + practiceState.questions.length + " 道高考真题</div>";
  } else {
    html += '<div class="big-score">' + acc + "%</div>";
    html += '<div class="score-label">得分</div>';
    html += '<div class="result-details">';
    html += '<div class="result-correct"><div class="num">' + correct + '</div><div class="label">正确</div></div>';
    html += '<div class="result-wrong"><div class="num">' + (total - correct) + '</div><div class="label">错误</div></div>';
    html += "</div>";
  }
  html += '<div style="margin-top:2rem;display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">';
  html += '<button class="btn btn-primary" onclick="startPractice()">智能练习</button>';
  html += '<button class="btn btn-secondary" onclick="startBrowse()">浏览真题</button>';
  html += '<button class="btn btn-secondary" onclick="resetPractice()">返回</button>';
  html += "</div></div>";
  area.innerHTML = html;
  updateStats();
}
