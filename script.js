document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggle-theme');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
    });
  }
});
