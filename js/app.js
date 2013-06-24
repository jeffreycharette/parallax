$(function () {
	
	// Carousel Autoplay
	$('#home-carousel').carousel({
	  interval: 8000
	});
	
	var ddT = '';
	
	// Nav Dropdown
	$('#nav a, #nav-dropdown, #nav-dropdown a, #nav-dropdown-left, #nav-dropdown-right').hover(
		function () { clearTimeout(ddT); $('#nav-dropdown').stop().fadeIn(); }, 
	  function () { ddT = setTimeout(function() { $('#nav-dropdown').stop().fadeOut(); }, 500); }
	);

	var bestsellers_carousel = $('#books-bestsellers .jcarousel').jcarousel({
    // Core configuration goes here
	});

	$('#books-bestsellers .jcarousel-prev').jcarouselControl({
      target: '-=1',
      carousel: $('#books-bestsellers')
  });

  $('#books-bestsellers .jcarousel-next').jcarouselControl({
      target: '+=1',
      carousel: $('#books-bestsellers')
  });

  $('#books-bestsellers .jcarousel').jcarouselAutoscroll({
    'interval': 8000,
    'autostart': true
	});

	var top10_carousel = $('#books-top10 .jcarousel').jcarousel({
    // Core configuration goes here
	});

	$('#books-top10 .jcarousel-prev').jcarouselControl({
      target: '-=1',
      carousel: $('#books-top10')
  });

  $('#books-top10 .jcarousel-next').jcarouselControl({
      target: '+=1',
      carousel: $('#books-top10')
  });

  $('#books-top10 .jcarousel').jcarouselAutoscroll({
    'interval': 8000,
    'autostart': true
	});
	
});