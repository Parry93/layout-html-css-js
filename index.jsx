const slider = document.querySelector('.gallery');
const slider2 = document.querySelector('.cont-card-2');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 3;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
});


slider2.addEventListener('mousedown', e => {
    isDown = true;
    slider2.classList.add('active');
    startX = e.pageX - slider2.offsetLeft;
    scrollLeft = slider2.scrollLeft;
});
slider2.addEventListener('mouseleave', _ => {
    isDown = false;
    slider2.classList.remove('active');
});
slider2.addEventListener('mouseup', _ => {
    isDown = false;
    slider2.classList.remove('active');
});
slider2.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider2.offsetLeft;
    const SCROLL_SPEED = 3;
    const walk = (x - startX) * SCROLL_SPEED;
    slider2.scrollLeft = scrollLeft - walk;
});

const scrollButton = document.getElementById("up-button");

scrollButton.addEventListener("click", scroll);

function scroll() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}