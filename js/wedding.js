$(document).ready(function() {
	var scrollListener = function() { 

// run this function once and unbind
		$(window).one('scroll', function() {
			var heroHeight = 325,
					nav = $('div.hero-nav');
			if ($(window).scrollTop() >= heroHeight) {
				nav.addClass('sticky');
			} else {
				nav.removeClass('sticky');
			}

// rebind after 100 ms
			setTimeout(scrollListener, 100);
		});
	}
	scrollListener();
});