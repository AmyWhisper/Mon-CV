const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click',() => {menu.classList.toggle('active')})

const allLinks = document.querySelectorAll ('.item-nav');

allLinks.forEach(item => {

    item.addEventListener('click',() => {menu.classList.toggle('active')})
    
})


const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})