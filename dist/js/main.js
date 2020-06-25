// Select DOM items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');

// to get all the nav items
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close'); //adding a class
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show'); 
        navItems.forEach(item => item.classList.add('show'));

        // Reset the Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close'); //removeing a class
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show'); 
        navItems.forEach(item => item.classList.remove('show'));

        // Reset the Menu State
        showMenu = false;
    }
}