// PEŠ - main.js

document.addEventListener('DOMContentLoaded', () => {

  // Highlight active nav
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === currentPage);
  });

});