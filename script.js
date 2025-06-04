document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggle-theme');

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
      if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.removeItem('theme');
      }
    });
  }
});
