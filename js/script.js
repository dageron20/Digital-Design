const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;


// клик по кнопке
navBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMobileNav();
});

// клик по окну за пределами nav
window.addEventListener('click', () => {
    if(mobileNav.classList.contains('mobile-nav-active')) {
        toggleMobileNav();
    }
})


// останавливаем клик внутри открытой nav для телефонов
mobileNav.addEventListener('click', (event) => {
    event.stopPropagation();
})

function toggleMobileNav() {
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
}

