const burgerBtn = document.querySelector('.burger-btn');
const burgerBlock = document.querySelector('.header-block');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    burgerBlock.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
})
