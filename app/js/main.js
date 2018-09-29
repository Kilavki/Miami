
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

		$('#view_all_gallery').click(function(){
			let content = '<div class="gallery_line main_flex__nowrap flex__jcontent_between"> <div class="box_img_gallery"> <img src="img/IG_46.jpg" alt=""> </div> 	<div class="box_img_gallery"> <img src="img/IG_47.jpg" alt=""> </div> 	</div> <div class="name_gallery"> Marina Palms / <span class="blue">North Miami Beach, FL 33162</span> </div>';
			$('#gallery_box').append(content);
			$(this).remove();
		});

		$('#modal_box, #black_fill').hide();

		$('#call').click(function(){
			$('#modal_box, #black_fill').show();
		});
		
		$( '#close_modal, #black_fill' ).click(function(){
			$('#modal_box, #black_fill').hide();
		});
		
		

	});