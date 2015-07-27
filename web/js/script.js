$(document).ready(function() {
	$(".mid-top").addClass("hide-top");
	$(".mid-bot").addClass("hide-bot");
	$('.loading').fadeOut();
	$('.cont-loader').delay(800).fadeOut(800);
	$('.trigger').click(function() {
		$('nav.nav-resp').slideToggle();
        $('.submenu-locales').slideToggle();
		$('.model-1 .menu .bar:nth-of-type(3)').toggleClass('model-1-hover');
		$('.model-1 .menu .bar:nth-of-type(2)').toggleClass('model-1-hover2');
		$('.model-1 .menu .bar:nth-of-type(1)').toggleClass('model-1-hover1');
        $('header').toggleClass('addclass-header');

	});
	$('nav.nav-resp ul li a').click(function() {
		$('nav.nav-resp').slideUp();
		$('.model-1 .menu .bar:nth-of-type(3)').toggleClass('model-1-hover');
		$('.model-1 .menu .bar:nth-of-type(2)').toggleClass('model-1-hover2');
		$('.model-1 .menu .bar:nth-of-type(1)').toggleClass('model-1-hover1');
        $('header').removeClass('addclass-header');
	});
    $('.logo-optica img').click(function() {
    $('nav.nav-resp').slideUp();    
    $('header').removeClass('addclass-header');
    $('.model-1 .menu .bar:nth-of-type(3)').removeClass('model-1-hover');
		$('.model-1 .menu .bar:nth-of-type(2)').removeClass('model-1-hover2');
		$('.model-1 .menu .bar:nth-of-type(1)').removeClass('model-1-hover1');    
    
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
	"images/imagenes1_1_ima.png",
	"images/imagenes2_1_ima.png",
	"images/imagenes3_1_ima.png",
	"images/imagenes1_2_ima.png",
	"images/imagenes2_2_ima.png",
	"images/imagenes3_2_ima.png",
	"images/imagenes1_3_ima.png",
	"images/imagenes2_3_ima.png",
	"images/imagenes3_3_ima.png",
	"images/imagenes1_4_ima.png",
	"images/imagenes2_4_ima.png",
	"images/imagenes3_4_ima.png",
	"images/banner1-03_msn.png",
	"images/banner2-03_msn.png",
	"images/banner3-03_msn.png",
	"images/banner4-03_msn.png",
	"images/banner1-01_bg.png",
	"images/banner2-01_bg.png",
	"images/banner3-01_bg.png",
	"images/banner4-01_bg.png",
	"images/banner1-01_point.png",
	"images/banner2-01_point.png",
	"images/banner3-01_point.png",
	"images/banner4-01_point.png",
	"images/banner1-01_tex.png",
	"images/banner2-01_tex.png",
	"images/banner3-01_tex.png",
	"images/banner4-01_tex.png",
	"images/banner1-04_ley.png",
	"images/banner2-04_ley.png",
	"images/banner3-04_ley.png",
	"images/banner4-04_ley.png",
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

$.fancybox.open('images/promo/pop-up.jpg');
    