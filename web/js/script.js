$(document).ready(function() {
	$(".mid-top").addClass("hide-top");
	$(".mid-bot").addClass("hide-bot");
	$('.loading').fadeOut();
	$('.cont-loader').delay(800).fadeOut(800);
	$('.trigger').click(function() {
		$('nav.nav-resp').slideToggle();
		$('.model-1 .menu .bar:nth-of-type(3)').toggleClass('model-1-hover');
		$('.model-1 .menu .bar:nth-of-type(2)').toggleClass('model-1-hover2');
		$('.model-1 .menu .bar:nth-of-type(1)').toggleClass('model-1-hover1');

	});
	$('nav.nav-resp ul li a').click(function() {
		$('nav.nav-resp').slideUp();
		$('.model-1 .menu .bar:nth-of-type(3)').toggleClass('model-1-hover');
		$('.model-1 .menu .bar:nth-of-type(2)').toggleClass('model-1-hover2');
		$('.model-1 .menu .bar:nth-of-type(1)').toggleClass('model-1-hover1');
	});
	$(document).mousedown(function(e) {
		var menu = $('nav.nav-resp');
		var trigger = $('.trigger');
		if (!menu.is(e.target) && !trigger.is(e.target) && menu.has(e.target).length === 0) {
			$('.nav.nav-resp').hide();
		}
	});

});

var images = new Array();

function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image();
		images[i].src = preload.arguments[i];
	}
}

preload(
	"images/banner1-01.png",
	"images/banner1-02.png",
	"images/banner1-03.png",
	"images/banner1-04.png",
	"images/gafas2-02.png",
	"images/gafas3-02.png",
	"images/contacto/contacto_1.jpg",
	"images/contacto/contacto_2.jpg",
	"images/contacto/contacto_3.jpg",
	"images/contacto/contacto_4.jpg",
	"images/contacto/contacto_5.jpg",
	"images/contacto/contacto_6.jpg",
	"images/contacto/contacto_7.jpg",
	"images/contacto/contacto_8.jpg",
	"images/contacto/contacto_9.jpg",
	"images/contacto/contacto_10.jpg",
	"images/contacto/contacto_11.jpg",
	"images/contacto/contacto_12.jpg"
	);
