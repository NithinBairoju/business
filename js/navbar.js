// navbar section

const navbar = document.getElementById('mobile-nav');
const navbarWindow = document.querySelector('.navbar');
const burger = document.getElementById('hamburger');
const transDiv = document.getElementById('navCloser');
const burgerImg = document.getElementById('hamburgerImg');
const navlinks = document.querySelectorAll('.navbar-link');
const section = document.querySelectorAll('section');
let navValue = false;

burger.addEventListener('click', navToggler)

transDiv.addEventListener('click', navToggler)

if (window.innerwidth > 900) {
    navlinks.forEach((e) => {
        e.addEventListener('click', navToggler)
    })
}



function navToggler() {
    navbar.classList.toggle('active-nav');
    transDiv.classList.toggle('active-nav');
    // checking state of nav bar for hamburger 
    if (navValue === false) {
        navValue = true
    } else {
        navValue = false
    }

    // changing hamburger
    if (navValue === true) {
        burgerImg.src = 'BG-images/closeicon.png'
        document.body.style.overflowY = 'hidden';
    } else {
        burgerImg.src = 'BG-images/hamburger.png'
        document.body.style.overflowY = 'scroll';
    }
}

// onscroll function
window.onscroll = function () {
    if (window.scrollY > 50) {
        setTimeout(() => {
            navbarWindow.classList.add('navbar-sticky');
        }, 100);

    } else if (window.scrollY <= 50) {
        setTimeout(() => {
            navbarWindow.classList.remove('navbar-sticky');
        }, 100);
    }
}



// initialising the js 
AOS.init({
    once: true,
});

