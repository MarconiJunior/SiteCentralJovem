const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

/*SHOW*/
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/

let currentIndex = 0
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//carousel

const carousel = document.querySelector(".carousel");
const carouselInner = document.querySelector(".carousel-inner");
const carouselItem = document.querySelectorAll(".carousel-item");

let currentIndexSlide = 0;
const slideWidth = carouselItem[0].clientWidth;

setInterval(() => {
    currentIndexSlide++;
    if (currentIndexSlide >= carouselItem.length) {
        currentIndexSlide = 0;
    }
    carouselInner.style.transform = `translateX(-${currentIndexSlide * slideWidth}px)`;
}, 4000);
