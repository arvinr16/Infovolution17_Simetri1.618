const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLink = document.getElementById('nav-link');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
    navLink.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    const insideNav = e.target.closest('.navbar');
    if(!insideNav) {
        hamburger.classList.remove('active');
        navLink.classList.remove('open');
    }
});