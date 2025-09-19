const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-links ul'); // target the UL

toggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});