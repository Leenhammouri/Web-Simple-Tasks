const toggleBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links')

toggleBtn.addEventListener('click', () => {
    links.classList.toggle("show-links");
})

const navbar = document.querySelector('nav');
const toTopButton = document.querySelector('.to-top-btn');

window.addEventListener('scroll', () => {
    scrollHeight = document.documentElement.scrollTop;
    if (scrollHeight > 10) {
        navbar.classList.add('fixed-nav');
    }
    else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        toTopButton.classList.remove('to-top-btn-hide');
    }
    else {
        toTopButton.classList.add('to-top-btn-hide');
    }
})

toTopButton.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})