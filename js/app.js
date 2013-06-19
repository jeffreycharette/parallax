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
	
});