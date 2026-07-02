// Render math expressions in an element
function renderMath(el) {
  if (typeof katex === "undefined") return;
  try {
    var els = el.querySelectorAll(".q-text, .q-option span");
    for (var i = 0; i < els.length; i++) {
      var html = els[i].innerHTML;
      if (html.indexOf("$") < 0) continue;
      var result = html.replace(/\$\$([\s\S]+?)\$\$/g, function(m, c) {
        var math = c.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        try { return katex.renderToString(math, {displayMode: true, throwOnError: false}); } catch(e) { return m; }
      });
      result = result.replace(/\$([^$]+?)\$/g, function(m, c) {
        var math = c.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        try { return katex.renderToString(math, {displayMode: false, throwOnError: false}); } catch(e) { return m; }
      });
      els[i].innerHTML = result;
    }
  } catch(e) {}
}

function esc(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Practice state
var practiceState = {
  questions: [],
  currentIndex: 0,
  answered: false,
  totalAnswered: 0,
  correctCount: 0
};

function getFilteredQuestions() {
  var topic = document.getElementById("topicFilter").value;
  var difficulty = document.getElementById("difficultyFilter").value;
  return questionBank.filter(function(q) {
    if (topic !== "all" && q.topic !== topic) return false;
    if (difficulty !== "all" && q.difficulty !== difficulty) return false;
    return true;
  });
}

function startPractice() {
  if (typeof questionBank === 'undefined' || !questionBank.length) {
    document.getElementById('questionArea').innerHTML = '<div class="empty-state"><div class="empty-icon">---</div><p>题库加载中</p></div>';
    return;
  }
  var filtered = getFilteredQuestions();
  if (filtered.length === 0) {
    document.getElementById("questionArea").innerHTML = '<div class="empty-state"><div class="empty-icon">---</div><p>没有符合条件的题目</p></div>';
    return;
  }
  practiceState.questions = filtered.slice().sort(function() { return Math.random() - 0.5; });
  practiceState.currentIndex = 0;
  practiceState.totalAnswered = 0;
  practiceState.correctCount = 0;
  practiceState.answered = false;
  document.getElementById("practiceStats").style.display = "flex";
  document.getElementById("modeInfo").innerHTML = '';
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

function renderQuestion() {
  var area = document.getElementById("questionArea");
  var q = practiceState.questions[practiceState.currentIndex];
  if (!q) { showResults(); return; }
  var stars = { "easy": "\u2605", "medium": "\u2605\u2605", "hard": "\u2605\u2605\u2605" };
  var starStr = stars[q.difficulty] || "";
  var totalQ = practiceState.questions.length;
  var html = '<div class="question-card fade-in" id="qCard">';
  html += '<div class="q-header">';
  html += '<span class="q-topic">' + esc(q.topic) + '</span>';
  html += '<span class="q-difficulty">' + starStr + '</span>';
  html += '<span class="q-number">' + (practiceState.currentIndex + 1) + " / " + totalQ + '</span>';
  html += '</div>';
  html += '<div class="q-text">' + esc(q.question) + '</div>';
  if (q.type === "choice") {
    var labels = ["A", "B", "C", "D"];
    html += '<div class="q-options" id="qOptions">';
    for (var i = 0; i < q.options.length; i++) {
      html += '<div class="q-option" data-index="' + i + '" onclick="selectOption(this)">';
      html += '<span class="option-label">' + labels[i] + '</span>';
      html += '<span>' + esc(q.options[i]) + '</span>';
      html += '</div>';
    }
    html += '</div>';
    html += '<div class="q-actions">';
    html += '<button class="btn btn-submit" id="submitBtn" onclick="submitAnswer()" disabled>提交答案</button>';
    html += '</div>';
  }
  html += '<div class="q-feedback" id="qFeedback"></div>';
  html += '</div>';
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
  var all = document.querySelectorAll(".q-option");
  for (var i = 0; i < all.length; i++) { all[i].style.pointerEvents = "none"; }
  document.getElementById("submitBtn").disabled = true;
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
  fb.innerHTML = (correct ? "回答正确！" : "回答错误") + '<div class="explanation">' + esc(q.explanation || "") + '</div>';
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
  var html = '<div class="results-card fade-in">';
  html += '<div class="big-score">' + acc + "%</div>";
  html += '<div class="score-label">得分</div>';
  html += '<div class="result-details">';
  html += '<div class="result-correct"><div class="num">' + correct + '</div><div class="label">正确</div></div>';
  html += '<div class="result-wrong"><div class="num">' + (total - correct) + '</div><div class="label">错误</div></div>';
  html += '</div>';
  html += '<div style="margin-top:2rem;display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">';
  html += '<button class="btn btn-primary" onclick="startPractice()">再来一轮</button>';
  html += '<button class="btn btn-secondary" onclick="resetPractice()">返回</button>';
  html += '</div></div>';
  area.innerHTML = html;
  updateStats();
}
