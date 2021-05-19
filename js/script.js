const navigation = document.querySelector('.navigation');
const navigationMenu = document.querySelector('.navigation__menu');
const navigationListItem = document.querySelector('.navigation__list-box');

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
    if(navigationMenu.classList.contains('navigation__menu--active')) {
        navigationListItem.classList.add('navigation__list-box--visible');
    } else {
        navigationListItem.classList.remove('navigation__list-box--visible');
    }

}

navigationMenu.addEventListener('click', toggleMenu);