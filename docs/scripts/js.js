const modalMenu = document.querySelector('.modal');
// const menu = document.querySelector('.nav__menu__item');
const menu = document.querySelectorAll('[data-modal]')
// console.log(menu)
menu.forEach(element => {
  element.addEventListener('click', ()=>{
    modalMenu.classList.toggle('modal--true');
  }
  )
})
