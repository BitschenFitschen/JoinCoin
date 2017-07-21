/*Author Behavior*/
$(document).ready(function(){
	// 1. set and get
	var theLinks = $('nav a');

	// 2. declare
	function navlink_manage(theLink) {
		// console.log(theLink);
		var whichSection = theLink.attr('href');
		
		function link_click(event) {
			event.preventDefault();

			// $(window).scrollTo('#section3', 1000);
			$(window).scrollTo(whichSection, 1000);
		}

		theLink.click(link_click);
	}

	// 3. trigger
	theLinks.each(function() {
		navlink_manage($(this));
	});
});

$(document).ready(function(){
	// 1. set
	theWindow = $(window);
	theLinks = $('nav a');

	theH1s = $('article h1');
	theH1s.css({'position':'relative', 'font-size':'75px', 'margin-top':'100px'});
	theH1s.animate({'opacity':'.3', 'left':'-1000px'});

	// 2. declare
	function window_scroll() {

		var howFar = theWindow.scrollTop();

		// concatenate
		console.log('We Are ' + howFar + ' px From the Top.');

		// range for section 1
		if (howFar < 742)
		{
			theLinks.removeClass('chosen');
			$(theLinks[0]).addClass('chosen');
			theH1s.animate({'opacity':'.3', 'left':'-1000px'});
			$(theH1s[0]).stop(true).animate({'opacity':'1', 'left':'0px'});
		}
		// range for section 2
		if (howFar >= 742 && howFar < 1342)
		{
			theLinks.removeClass('chosen');
			$(theLinks[1]).addClass('chosen');
			theH1s.animate({'opacity':'.3', 'left':'-1000px'});
			$(theH1s[1]).stop(true).animate({'opacity':'1', 'left':'0px'});
		}
		// range for section 3
		if (howFar >= 1342 && howFar < 1942)
		{
			theLinks.removeClass('chosen');
			$(theLinks[2]).addClass('chosen');
			theH1s.animate({'opacity':'.3', 'left':'-1000px'});
			$(theH1s[2]).stop(true).animate({'opacity':'1', 'left':'0px'});
		}
		// range for section 3
		if (howFar >= 1942)
		{
			theLinks.removeClass('chosen');
			$(theLinks[3]).addClass('chosen');
			theH1s.animate({'opacity':'.3', 'left':'-1000px'});
			$(theH1s[3]).stop(true).animate({'opacity':'1', 'left':'0px'});
		}
	}

	// 3. trigger
	theWindow.scroll(window_scroll);

});











