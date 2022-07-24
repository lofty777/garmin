/* $(document).ready(function(){
	$('.carousel__inner').slick({        
		speed: 1200,    
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {          
					dots: true,
					arrows: false
				}
			}
		]
	});
}); */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  speed: 1200,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});