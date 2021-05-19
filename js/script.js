const navigation = document.querySelector('.navigation');

const navigationMenu = document.querySelector('.navigation__menu');

function scrolledNav() {

    let scrollY = window.scrollY;

    if(scrollY > 300) {
        navigation.classList.add('navigation--scrolled');
    } else {
        navigation.classList.remove('navigation--scrolled');
    }
}

window.addEventListener('scroll', scrolledNav);

function toggleMenu() {

    navigationMenu.classList.toggle('navigation__menu--active');

}

navigationMenu.addEventListener('click', toggleMenu);