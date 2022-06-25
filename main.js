const mobileNav = document.querySelector('.mobile-header');
const navHeader = document.querySelector('.header');
const toggleNavbar = () => {
  navHeader.classList.toggle('active');
};
mobileNav.addEventListener('click', () => toggleNavbar());