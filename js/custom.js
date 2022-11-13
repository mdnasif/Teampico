// owl-carousel for what we do section
$('.wwd-active').owlCarousel({
	loop: true,
	margin: 0,
	items: 5,
	autoplay: true,
	autoplayTimeout: 3000,
	sliderSpeed: 1000,
	center: true,
	animateOut: 'fadeOut',
	nav: false,
	dots: false,
	responsive: {
		0: {
			items: 1,
			autoplay: false,
		},
		767: {
			items: 2
		},
		992: {
			items: 2
		},
		1100: {
			items: 3
		},
		1400: {
			items: 4,
		},
		1880: {
			items: 5,
		},
	}
});
// owl-carousel for testimonial section
$('.test-active').owlCarousel({
	loop: true,
	margin: 0,
	nav: true,
	navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
	navContainer: '#navhere',
	responsiveClass: true,
	// autoplay:true,
	responsive: {
		0: {
			items: 1,
			nav: true,
		},
		600: {
			items: 2,
			nav: true,
		},
		767: {
			items: 2,
			nav: true,
		},
		1000: {
			items: 3,
			nav: true,
		}
	}
});

// plan section
$('.plan-active').owlCarousel({
	loop: true,
	margin: 10,
	items: 3,
	autoplay: true,
	autoplayTimeout: 3000,
	sliderSpeed: 1000,
	center: true,
	animateOut: 'fadeOut',
	nav: false,
	dots: false,
	responsive: {
		0: {
			items: 1,
			autoplay: false,
		},
		767: {
			items: 1
		},
		992: {
			items: 2
		},
		1100: {
			items: 3
		},
		1400: {
			items: 3,
		},
		1880: {
			items: 3,
		},
	}
});
// mixitup Plugin
var mixer = mixitup('.projects-gallery');

// counter section 
jQuery(document).ready(function ($) {
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
});

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});
// wow js
new WOW().init();

// css preloader 
$(window).on('load', function () {
	//$("#loading").delay(2000).fadeOut(500);
$("#loading").fadeOut(500);
});