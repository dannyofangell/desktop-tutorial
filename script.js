document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggle-theme');

  if (localStorage.getItem('theme') !== 'light') {
    document.body.classList.add('dark-theme');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
      if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }

  document.querySelectorAll('.code-block').forEach(function(block) {
    const button = block.querySelector('.code-toggle');
    const pre = block.querySelector('pre');
    if (button && pre) {
      pre.style.display = 'none';
      button.addEventListener('click', function() {
        const isHidden = pre.style.display === 'none';
        pre.style.display = isHidden ? 'block' : 'none';
        button.setAttribute('aria-expanded', isHidden);
      });
    }
  });
});
