import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
// import mousewheel from 'jquery-mousewheel';
import 'fullpage.js';
import 'magnific-popup';
// import 'photoswipe';
import '@fancyapps/fancybox';
import 'wheelzoom';

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

		// $('.slider_awards .slider__link').magnificPopup({
		// 	type: 'image',
		// 	closeBtnInside: false,
		// 	fixedContentPos: 'auto',
		// 	gallery: {
		// 		enabled:true
		// 	}
		// });
        //
		// $('.slider_reviews .slider__link').magnificPopup({
		// 	type: 'image',
		// 	closeBtnInside: false,
		// 	fixedContentPos: 'auto',
		// 	gallery: {
		// 		enabled:true,
		// 		verticalFit: true
		// 	}
		// });

		// $('.slider_articles .article__link').magnificPopup({
		// 	type: 'image',
		// 	closeBtnInside: false,
		// 	fixedContentPos: 'auto',
		// 	gallery: {
		// 		enabled:true,
		// 		verticalFit: true
		// 	}
		// });
		$('[data-fancybox="awards"]').fancybox({
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
			touch : 'horizontal',
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
				var captionHeight = $('.fancybox-caption').height;
				var imageWrap = $('.fancybox-slide--current .fancybox-image-wrap').height;
				console.log(captionHeight);
				$('.fancybox-slide--current .fancybox-image-wrap ').height(imageWrap + captionHeight);

				$('.fancybox-slide--current .fancybox-image-wrap ').append(slideCurr.parent('.fancybox-stage').next().html());
				// $('.fancybox-slide--current .fancybox-image-wrap').data('caption', slideCurr.parent('.fancybox-stage').next().children('.fancybox-caption').val());
				$('.fancybox-slide--current .fancybox-image-wrap').css('padding-bottom', captionHeight);

				if (el) {
					wheelzoom(el);
					el.classList.add('wheelzoomed');

				}

				$('.fancybox-slide--current .fancybox-image').click(function () {
					$(this).toggleClass('fancybox-image_scale');
				});
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
			touch : 'horizontal',
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
				var captionHeight = $('.fancybox-caption').height;
				var imageWrap = $('.fancybox-slide--current .fancybox-image-wrap').height;
				console.log(captionHeight);
				$('.fancybox-slide--current .fancybox-image-wrap ').height(imageWrap + captionHeight);

				$('.fancybox-slide--current .fancybox-image-wrap ').append(slideCurr.parent('.fancybox-stage').next().html());
				// $('.fancybox-slide--current .fancybox-image-wrap').data('caption', slideCurr.parent('.fancybox-stage').next().children('.fancybox-caption').val());
				$('.fancybox-slide--current .fancybox-image-wrap').css('padding-bottom', captionHeight);

				if (el) {
					wheelzoom(el);
					el.classList.add('wheelzoomed');

				}

				$('.fancybox-slide--current .fancybox-image').click(function () {
					$(this).toggleClass('fancybox-image_scale');
				});
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
			touch : 'horizontal',
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
				var captionHeight = $('.fancybox-caption').height;
				var imageWrap = $('.fancybox-slide--current .fancybox-image-wrap').height;
				console.log(captionHeight);
				$('.fancybox-slide--current .fancybox-image-wrap ').height(imageWrap + captionHeight);

				$('.fancybox-slide--current .fancybox-image-wrap ').append(slideCurr.parent('.fancybox-stage').next().html());
				// $('.fancybox-slide--current .fancybox-image-wrap').data('caption', slideCurr.parent('.fancybox-stage').next().children('.fancybox-caption').val());
				$('.fancybox-slide--current .fancybox-image-wrap').css('padding-bottom', captionHeight);

				if (el) {
					wheelzoom(el);
					el.classList.add('wheelzoomed');

				}
				$('.fancybox-slide--current .fancybox-image').click(function () {
					$(this).toggleClass('fancybox-image_scale');
				});
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
			touch : 'horizontal',
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
				var captionHeight = $('.fancybox-caption').height;
				var imageWrap = $('.fancybox-slide--current .fancybox-image-wrap').height;
				console.log(captionHeight);
				$('.fancybox-slide--current .fancybox-image-wrap ').height(imageWrap + captionHeight);

				$('.fancybox-slide--current .fancybox-image-wrap ').append(slideCurr.parent('.fancybox-stage').next().html());
				// $('.fancybox-slide--current .fancybox-image-wrap').data('caption', slideCurr.parent('.fancybox-stage').next().children('.fancybox-caption').val());
				$('.fancybox-slide--current .fancybox-image-wrap').css('padding-bottom', captionHeight);

				if (el) {
					wheelzoom(el);
					el.classList.add('wheelzoomed');

				}
				$('.fancybox-slide--current .fancybox-image').click(function () {
					$(this).toggleClass('fancybox-image_scale');
				});
				console.log('afterShow fired');
			}
		});

		wheelzoom(document.querySelectorAll('.fancybox-image'), {zoom:0.5});

		wheelzoom(document.querySelectorAll('.mfp-img'), {zoom:0.5});

	});


})(jQuery);
