const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
  }
});