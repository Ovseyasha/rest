$(function () {

 	var flag = 0;
 	$(".header__hum").on('click', function () {
		if (flag == 0) {
			console.log(1);
			$('.header__ham-line_1').addClass('active-1');
			$('.header__ham-line_2').addClass('active-2');
			$('.header__ham-line_3').addClass('active-3');
			$('.hide-menu').slideDown();
			flag = 1;
		}else if(flag == 1){
			console.log(2);
			$('.header__ham-line_1').removeClass('active-1');
			$('.header__ham-line_2').removeClass('active-2');
			$('.header__ham-line_3').removeClass('active-3');
			$('.hide-menu').slideUp();
			flag = 0;
		}
	});
 	$('.slider__items').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  appendArrows: $('.slick-arrow'),
            prevArrow: '<button id="prev" type="button" class="slick-prev"></button>',
            nextArrow: '<button id="next" type="button" class="slick-next"></button>',
      appendDots: $(".dots"),
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 960,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
	$('.inst__slider').slick({
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 6,
		responsive: [
	    {
	      breakpoint: 1465,
	      settings: {
	        slidesToShow: 6,
	      }
	    },
	    {
	      breakpoint: 960,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
		
});
