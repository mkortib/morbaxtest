$(function() {


$('.slider').owlCarousel({
			loop: true,
			items: 1,
			smartSpeed: 700,
			nav: true,
			dots: false,
			navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
			responsiveClass: true,
			URLhashListener: true
		});

	var owl = $('.slider');

	 $('#nnext').on('click', function () {
      owl.trigger('next.owl.carousel', [500]);
  });
  $('#pprev').on('click', function () {
      owl.trigger('prev.owl.carousel', [500]);
  });

	var sect = document.getElementById("sect");
	var up = false;
	sect.onclick = function() {
		if (up == false) {
			sect.style.backgroundImage = 'url(../img/arrow-up.png';
			up = true;
		} else {
			sect.style.backgroundImage = 'url(../img/arrow-down.png';
			up = false;
		}
		
	}

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black']
		// navbar: {
			// title: '<img src="img/logo-1.svg" alt="logo smitler">'
		// }
	});
	
	var api = $("#my-menu").data( "mmenu" );
	api.bind( "open:finish", function() { $('.hamburger').addClass('is-active');}).bind('close:finish', function() {$('.hamburger').removeClass('is-active');});﻿

	$('.list-group-item').mouseover(function() {
		$('.list-group-item').removeClass('active');
		$(this).addClass('active');
	})

	  AOS.init();

	 $('#list > li').hover(function (event) {
        $(this).children("ul").slideToggle();
        event.stopPropagation();
    });

	 $('.quest_menu ul li').click(function() {
	 		$('.quest_menu ul li').removeClass('active');
	 		$(this).addClass('active');
	 })

});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
})