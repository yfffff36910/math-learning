// 数海导航 - 主脚本
document.addEventListener('DOMContentLoaded', function() {
  // 移动端菜单关闭
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      document.querySelector('.nav-links')?.classList.remove('open');
    });
  });

  // 卡片淡入动画
  var cards = document.querySelectorAll('.feature-card, .topic-card, .question-card');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(function(c) { observer.observe(c); });
});