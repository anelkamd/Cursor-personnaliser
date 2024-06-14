const mouse = document.querySelector('#mouse');

window.addEventListener('mousemove', (e) => {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
});

const Tittles = document.querySelectorAll('h1, h3');
Tittles.forEach( Tittles => {
    title.addEventListener('mouseover', () => {
        document.mouse.classList.add('cursor-anim');
    });

    title.addEventListener('mouseout', () => {
        document.mouse.classList.remove('cursor-anim');
    });

})
