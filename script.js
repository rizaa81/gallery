const lightMode = document.querySelector('.light-mode');
const darkMode = document.querySelector('.dark-mode');
const menuNavigation = document.querySelector('.menu');
const menuBar = document.querySelector('.fa-bars');
const scrollTop = document.querySelector('.scrolltop');
const iconWa = document.querySelector('.icon-wa');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100 ) {
        iconWa.classList.add('active');
    } else {
        iconWa.classList.remove('active');
    }
} )

window.addEventListener('scroll', () => {
    if (window.scrollY > 100 ) {
        scrollTop.classList.add('active')
    } else {
        scrollTop.classList.remove('active');
    }
} )

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('is-active');
    menuNavigation.classList.toggle('menu-active');
})

lightMode .addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-active');
    darkMode.classList.toggle('active');
    lightMode.classList.toggle('active');
})    

darkMode.addEventListener('click', () => {
    document.body.classList.remove('dark-mode-active');
    darkMode.classList.remove('active');
    lightMode.classList.remove('active');
})

// scroll top
