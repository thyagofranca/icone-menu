document.querySelectorAll('.nav-toggler1, .nav-toggler2, .nav-toggler3').forEach(obj => {
    obj.addEventListener('click', () => {
        obj.classList.toggle('open');
    });
});