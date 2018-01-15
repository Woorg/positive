import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
// import mousewheel from 'jquery-mousewheel';
import 'fullpage.js';
import 'magnific-popup';
// import 'photoswipe';
import '@fancyapps/fancybox';
// import elevateZoom from '@zeitiger/elevatezoom';
import 'wheelzoom';
// import 'easyzoom';

(function ($) {

	svg4everybody();

	var styles = [
		'padding: 9px',
		'background: #fff',
		'color: #000',
		'display: inline-block',
		'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
		'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
		'line-height: 1.4',
		'text-align: left',
		'font-size: 12px',
		'font-weight: 400'
	].join(';');

	console.log('%c заказать html верстку',  styles);
	console.log('%c gorlov35@gmail.com',  styles);

	$(function() {

		// header

		let $header = $('.header');
		let $headerHeight = $('.header').outerHeight();

		$('.page').css('padding-top', $headerHeight);

		$(window).resize( function () {
			let $header = $('.header');
			let $headerHeight = $('.header').outerHeight();
			$('.page').css('padding-top', $headerHeight);
		});

		let $nextButton = $('.about__next');

		$nextButton.addClass('about__next_animated');


		$('.fullpage').fullpage({
			anchors: ['aboutSection', 'awardsSection', 'reviewsSection', 'pressSection', 'certificatesSection'],
			menu: '.fullpage-nav__list',
			normalScrollElements: '.fancybox-image, .mfp-img'
		});

		$('[data-fancybox="awards"]').fancybox({
			loop: true,
			margin : [ 44, 0, 90, 0 ],
			buttons : [
				'close'
			],
			touch : false,
			animationEffect : 'fade',
			animationDuration : 300,
			modal : false,
			wheel : true,
			onInit : function( instance ) {

				// Make zoom icon clickable
				instance.$refs.toolbar.find('.fancybox-zoom').on('click', function() {

				 if ( instance.isScaledDown() ) {
				   instance.scaleToActual();

				 } else {
				   instance.scaleToFit();
				 }

				});
			},
			afterShow : function( instance, current ) {
				var el = document.querySelector('.fancybox-slide--current .fancybox-image:not(.wheelzoomed)');
				var slideCurr = $('.fancybox-slide--current');
				var slideCaption = slideCurr.parent('.fancybox-stage').next().children('.fancybox-caption').text();
				var sliderCaptionQuant = $('.fancybox-image-wrap .fancybox-caption').length;

				if (sliderCaptionQuant > 1) {

				} else {
					$('.fancybox-slide--current .fancybox-image-wrap ').append(slideCurr.parent('.fancybox-stage').next().html());
				}

				console.log($('.fancybox-image-wrap .fancybox-caption').length);

				if (el) {
					wheelzoom(el);
					el.classList.add('wheelzoomed');


				}

				// $('.fancybox-slide--current .fancybox-image').click(function () {
				// 	$(this).toggleClass('fancybox-image_scale');
				// });
				console.log('afterShow fired');


			}
		});

		$('[data-fancybox="reviews"]').fancybox({
			loop: true,
			margin : [ 44, 0, 90, 0 ],
			buttons : [
				// 'slideShow',
				// 'fullScreen',
				// 'thumbs',
				// 'share',
				//'download',
				//'zoom',
				'close'
			],
			touch : false,
			animationEffect : 'fade',
			animationDuration : 300,
			// clickSlide: 'zoom',
			modal : false,
			wheel : false,
			onInit : function( instance ) {

				// Make zoom icon clickable
				instance.$refs.toolbar.find('.fancybox-zoom').on('click', function() {

				 if ( instance.isScaledDown() ) {
				   instance.scaleToActual();

				 } else {
				   instance.scaleToFit();
				 }

				});
			},
			afterShow : function( instance, current ) {
				var el = document.querySelector('.fancybox-slide--current .fancybox-image:not(.wheelzoomed)');
				var slideCurr = $('.fancybox-slide--current');
				var slideCaption = slideCurr.parent('.fancybox-stage').next().children('.fancybox-caption').text();
				var sliderCaptionQuant = $('.fancybox-image-wrap .fancybox-caption').length;

				if (sliderCaptionQuant > 1) {

				} else {
					$('.fancybox-slide--current .fancybox-image-wrap ').append(slideCurr.parent('.fancybox-stage').next().html());
				}

				if (el) {
					wheelzoom(el);
					el.classList.add('wheelzoomed');

				}

				// $('.fancybox-slide--current .fancybox-image').click(function () {
				// 	$(this).toggleClass('fancybox-image_scale');
				// });
				console.log('afterShow fired');
			}
		});

		$('[data-fancybox="slider"]').fancybox({
			loop: true,
			margin : [ 44, 0, 90, 0 ],
			buttons : [
				// 'slideShow',
				// 'fullScreen',
				// 'thumbs',
				// 'share',
				//'download',
				//'zoom',
				'close'
			],
			touch : false,
			animationEffect : 'fade',
			animationDuration : 300,
			// clickSlide: 'zoom',
			modal : false,
			wheel : false,
			onInit : function( instance ) {

				// Make zoom icon clickable
				instance.$refs.toolbar.find('.fancybox-zoom').on('click', function() {

				 if ( instance.isScaledDown() ) {
				   instance.scaleToActual();

				 } else {
				   instance.scaleToFit();
				 }

				});
			},
			afterShow : function( instance, current ) {
				var el = document.querySelector('.fancybox-slide--current .fancybox-image:not(.wheelzoomed)');
				var slideCurr = $('.fancybox-slide--current');
				var slideCaption = slideCurr.parent('.fancybox-stage').next().children('.fancybox-caption').text();
				var sliderCaptionQuant = $('.fancybox-image-wrap .fancybox-caption').length;

				if (sliderCaptionQuant > 1) {

				} else {
					$('.fancybox-slide--current .fancybox-image-wrap ').append(slideCurr.parent('.fancybox-stage').next().html());
				}

				if (el) {
					wheelzoom(el);
					el.classList.add('wheelzoomed');

				}
				// $('.fancybox-slide--current .fancybox-image').click(function () {
				// 	$(this).toggleClass('fancybox-image_scale');
				// });
				console.log('afterShow fired');
			}
		});

		$('[data-fancybox="cartificates"]').fancybox({
			loop: true,
			margin : [ 44, 0, 90, 0 ],
			buttons : [
				// 'slideShow',
				// 'fullScreen',
				// 'thumbs',
				// 'share',
				//'download',
				//'zoom',
				'close'
			],
			touch : false,
			animationEffect : 'fade',
			animationDuration : 300,
			// clickSlide: 'zoom',
			modal : false,
			wheel : false,
			onInit : function( instance ) {

				// Make zoom icon clickable
				instance.$refs.toolbar.find('.fancybox-zoom').on('click', function() {

				 if ( instance.isScaledDown() ) {
				   instance.scaleToActual();

				 } else {
				   instance.scaleToFit();
				 }

				});
			},

			afterShow : function( instance, current ) {
				var el = document.querySelector('.fancybox-slide--current .fancybox-image:not(.wheelzoomed)');
				var slideCurr = $('.fancybox-slide--current');
				var slideCaption = slideCurr.parent('.fancybox-stage').next().children('.fancybox-caption')[0].text();
				var sliderCaptionQuant = $('.fancybox-image-wrap .fancybox-caption').length;

				if (sliderCaptionQuant > 1) {

				} else {
					$('.fancybox-slide--current .fancybox-image-wrap ').append(slideCurr.parent('.fancybox-stage').next().html());
				}

				if (el) {
					wheelzoom(el);
					el.classList.add('wheelzoomed');

				}
			}
		});

		wheelzoom(document.querySelectorAll('.fancybox-image'), {zoom:0.01});

		// wheelzoom(document.querySelectorAll('.mfp-img'), { maxZoom: 1, zoom: 0.02 });

		// $('.fancybox-image').CloudZoom();

		// $(".fancybox-image").elevateZoom({
		// 	zoomType: "inner",
		// 	cursor: "zoom"
		// });

	});


})(jQuery);
