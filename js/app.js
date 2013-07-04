$(function () {
	
	// Carousel Autoplay
	$('.home-carousel').carousel({
	  interval: 8000
	});
	
	// Nav Dropdown
	$('.nav a, .nav-dropdown:nth-child(1n+1)')
  .hover(function() {
      $(".nav-dropdown").stop().slideToggle("fast");
  });

	// Carousel Autoplay
	$('#social-bar-carousel').carousel({
		interval: 15000
	});

	// Homepage Featured Products
	$('.top-products .container .row-fluid .span12').isotope({ filter: '.best', layoutMode : 'masonry' });

	$('.top-products-selection a').click( function(e) {
		e.preventDefault();
		$('.top-products-selection a').removeClass('active');
		$(this).addClass('active');
	  var selector = $(this).attr('data-filter');
	  $('.top-products .container .row-fluid .span12').isotope({ filter: selector, layoutMode : 'masonry' });
	  return false;
	});

});