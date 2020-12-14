




document.getElementById('nav-users').addEventListener('click', function () {
    document.getElementById('main-content-container-wrapper').style.transform = 'translateY(0%)';
});

document.getElementById('nav-products').addEventListener('click', function () {
    document.getElementById('main-content-container-wrapper').style.transform = 'translateY(-100%)';
});

document.getElementById('nav-parts').addEventListener('click', function () {
    document.getElementById('main-content-container-wrapper').style.transform = 'translateY(-200%)';
});

document.getElementById('nav-repairs').addEventListener('click', function () {
    document.getElementById('main-content-container-wrapper').style.transform = 'translateY(-300%)';
});