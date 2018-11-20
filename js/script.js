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

  var owl = $('.slider-1').owlCarousel({
    loop:true,
    margin: 50,
    autoplay: true,
    nav: false,
    responsive:{
      0:{
        items:1
      }
    }
  });
  var owl = $('.slider-1');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
