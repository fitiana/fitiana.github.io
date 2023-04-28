(function ($) {
	"use strict";
	
	// /*==========  testimonial  ==========*/
	var swiper = new Swiper(".testimonial-slider", {
		slidesPerView: 1,
		loop: true,
		spaceBetween: 50,
		pagination: {
			el: ".dots",
			clickable: true,
		},
		breakpoints: {
			991: {
				spaceBetween: 50,
			},
		}
	});

	
})(jQuery);