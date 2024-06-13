const mouse = document.querySelector('#mouse');

window.addEventListener('mousemove', (e) => {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
});

window.addEventListener('mouseleave', () => {
    mouse.style.display = 'none';  
});

window.addEventListener('mouseenter', () => {
    mouse.style.display = 'block';  // Faire réapparaître la div quand la souris entre dans la fenêtre
});