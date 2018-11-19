// hamburger menu

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// animated

$(document).ready(function() {
  $(".main-nav__list").addClass('animated fadeInUp');
  $(".page-header__iphone").addClass('animated flip');
});


// carousel

  $('.owl-carousel').owlCarousel({
    loop:true,
    dots: true,
    nav: true,
    responsive:{
      0:{
        items:1
      }
    }
  });
