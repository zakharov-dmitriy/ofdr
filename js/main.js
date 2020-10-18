$(function () {

   $('.courses-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      responsive: [
         {
            breakpoint: 1120,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 860,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });

   $('.examples-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/main/arrow-left.svg"></button>',
      nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/main/arrow-right.svg"</button>',
      responsive: [
         {
            breakpoint: 1180,
            settings: {
               arrows: false,
               autoplay: true,
               autoplaySpeed: 2000
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 3,
               arrows: false,
               autoplay: true,
               autoplaySpeed: 2000
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               arrows: false,
               autoplay: true,
               autoplaySpeed: 2000
            }
         }
      ]
   });


});

document.querySelector('.burger__btn').addEventListener('click', function () {
   document.querySelector('.header-menu__list').classList.toggle('menu--active');
   document.querySelector('.btn-line').classList.toggle('btn-line--active');
   document.querySelector('body').classList.toggle('lock');
});

// document.querySelector('.burger__btn').onclick = function () {
//    document.querySelector('.btn-line').classList.toggle('btn-line--active');
// }