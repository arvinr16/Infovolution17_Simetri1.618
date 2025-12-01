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

const texts = ["Welcome to our official company website",
               "We Design. We Create. We Inspire",
               "Learn more about who we are."
];

let x = 0;
let y = 0;
let currentText = texts[y];
let isDeleting = false;
const speeds = 60;
const deleteSpeed = 40;
const delay = 700;

function typewriter() {
    const element = document.getElementById('typewriter');

    if(!isDeleting && x < currentText.length) {
        element.innerHTML = currentText.substring(0, x + 1);
        x++
        setTimeout(typewriter, speeds);
    } else if (isDeleting && x > 0) {
        element.innerHTML = currentText.substring(0, x - 1);
        x--;
        setTimeout(typewriter, deleteSpeed);
    } else if (!isDeleting && x === currentText.length) {
        isDeleting = true;
        setTimeout(typewriter, delay);
    } else if (isDeleting && x === 0) {
        isDeleting = false;
        y = (y + 1) % texts.length;
        currentText = texts[y];
        setTimeout(typewriter, delay);
    }
};

document.addEventListener("DOMContentLoaded", typewriter);

/* Responsive Purpose */
document.addEventListener("DOMContentLoaded", () => {
    const imgContainer = document.querySelector(".img-landing-detail");
    const image = imgContainer?.querySelector("img");
    const target = document.querySelector(".landing-title");

    if (!image || !target) return;

    const originalParent = image.parentNode;
    const originalNextSibling = image.nextSibling;

    const mediaQuery = window.matchMedia("(max-width: 688px)");

    function handleResize(e) {
        if (e.matches) {
            // Layar max-width: 958px → pindah sebelum tombol
            target.parentNode.insertBefore(image, target);
        } else {
            // Layar min-width: 958px → kembalikan ke posisi awal
            if (originalNextSibling && originalNextSibling.parentNode === originalParent) {
                originalParent.insertBefore(image, originalNextSibling);
            } else {
                originalParent.appendChild(image);
            }
        }
    }

    // Jalankan saat pertama kali
    handleResize(mediaQuery);

    // Dengarkan perubahan media query
    mediaQuery.addEventListener("change", handleResize);
});