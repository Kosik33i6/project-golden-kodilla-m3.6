const navigation = document.querySelector('.navigation');

function scrolledNav() {

    let scrollY = window.scrollY;

    if(scrollY > 300) {

        navigation.classList.add('navigation--scrolled');

    } else {

        navigation.classList.remove('navigation--scrolled');

    }

}

window.addEventListener('scroll', scrolledNav);