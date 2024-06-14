const mouse = document.querySelector('#mouse');

window.addEventListener('mousemove', (e) => {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
});

const Tittles = document.querySelectorAll('h1, h3');
Tittles.addEventListener('mousemove', (e) => {
    mouse.style.transform = scale(1.1)
})