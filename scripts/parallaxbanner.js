let text = document.getElementById('text-title-animation');
let forestBg = document.getElementById('forest-bg');
let trees = document.getElementById('trees');
let frontFire = document.getElementById('front-fire');
let backFire = document.getElementById('back-fire');
let button = document.getElementById('start-btn');

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    text.style.top =  value * -0.4 + 'vh';
    forestBg.style.top = value * 0.15 + 'px';
    trees.style.top = value * -0.15 + 'px';
    button.style.top = value * -0.26 + 'vh';

    frontFire.style.top = value * -0.1 + 'px';
    backFire.style.top = value * -0.1 + 'px';

})
