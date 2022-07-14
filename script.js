'use strict';

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const menuBlur = document.querySelector('.menu-blur');
// const blurredMenuBlur = document.querySelector('.blurred');


menuBtn.addEventListener('click', () => {
    nav.classList.toggle('menu');
    menuBlur.classList.toggle('blurred');
    menuBtn.classList.toggle('active-menu-btn');
})

menuBlur.addEventListener('click', () => {
    nav.classList.toggle('menu');
    menuBlur.classList.toggle('blurred');
    menuBtn.classList.toggle('active-menu-btn');    
})

// const u = new Promise()