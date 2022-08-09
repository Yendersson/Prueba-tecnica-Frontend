// let slideIndex = 1;
// showSlides(slideIndex);

// // THUMBNAIL IMAGE CONTROL
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("Banner");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   for (i = 0; i < dots.length; i++) {
//     dots[i].classList.remove('active');

//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].classList.add("active") ;
// }

const modalMenu = document.querySelector('.modal');
const menu = document.querySelector('.nav__menu__item');

menu.addEventListener('click', ()=>{
  modalMenu.classList.add('modal--true');
})


