const menu = document.querySelector('.menu-wrapper');
const boxs = document.querySelectorAll('.box');
const navbar = document.querySelector('nav');
const body = document.querySelector('body');
const html = document.querySelector('html');
const links = navbar.querySelectorAll('a');

/* Kullanıcı linklerden birine tıklayıp sayfayı yenilerse sayfanın otomatik hep aynı yere dönmesini engellemek için */
window.scrollTo(0, 0);

let menuOff = true;

function openMenu() {
    html.classList.add('body-fixed');
    body.classList.add('body-fixed');
    navbar.style.transform = 'translateX(-100%)';
    boxs[1].style.opacity = '0';
    boxs[3].style.opacity = '0';
    boxs[5].style.opacity = '0';
    boxs[7].style.opacity = '0';
    menuOff = false;
}

function closeMenu() {
    html.classList.remove('body-fixed');
    body.classList.remove('body-fixed');
    navbar.style.transform = 'translateX(0)';
    boxs[1].style.opacity = '1';
    boxs[3].style.opacity = '1';
    boxs[5].style.opacity = '1';
    boxs[7].style.opacity = '1';
    menuOff = true;
}

menu.addEventListener('click', function () {
    if (menuOff) {
        openMenu();
    } else {
        closeMenu();
    }
})
links.forEach(link => {
    link.addEventListener('click', function () {
        closeMenu();
        menuOff = true;
    })
})