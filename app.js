const mouse = document.querySelector('#mouse');

window.addEventListener('mousemove', (e) => {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
});