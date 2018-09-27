
$(function () {

	'use strict'

	$('a[href^="#"]').click(function () {
		let target = $(this).attr('href');
		$('html, body').animate(
			{
				scrollTop: $(target).offset().top
			},
			800
		);
	});

	let offset = $('#bottom__header').offset();

	$(window).scroll(function () {

		if ($(window).scrollTop() > offset.top) {
			$('#bottom__header').addClass('fixedNav');
		} else {
			$('#bottom__header').removeClass('fixedNav');
		}

	});

	if( window.innerWidth > 1024 ) {
		$('#slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 4000,
			});
	} else {
		$('#slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 4000,
			});
		}
	

	});