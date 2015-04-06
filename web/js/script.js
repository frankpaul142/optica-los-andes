$(document).ready(function() {
    $( ".mid-top" ).addClass( "hide-top" );
    $( ".mid-bot" ).addClass( "hide-bot" );
    $('.loading').fadeOut();
    $('.cont-loader').delay(800).fadeOut(800);
    function preloader() {
	if (document.images) {
		var img1 = new Image();


		img1.src = "images/slides-home/1.png";
		
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader);
    
});
$('.trigger').click(function() {
		$('nav.nav-resp').toggle();
});
$(document).mousedown(function(e) {
		var menu = $('nav.nav-resp');
		var trigger = $('.trigger');
		if (!menu.is(e.target) && !trigger.is(e.target) && menu.has(e.target).length === 0) {
			$('.nav.nav-resp').hide();
		}
	});
