import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
import 'fullpage.js';
import 'fullpage.js/dist/jquery.fullpage.extensions.min.js';
import 'magnific-popup';
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

		const $header = $('.header');
		const $headerHeight = $('.header').outerHeight();

		$('.page').css('padding-top', $headerHeight);

		$(window).resize( function () {
			let $header = $('.header');
			let $headerHeight = $('.header').outerHeight();
			$('.page').css('padding-top', $headerHeight);
		});

		const $nextButton = $('.about__next');

		$nextButton.addClass('about__next_animated');

		$nextButton.click(function (e) {
			e.preventDefault();
		});

		const $fP = $('.fullpage');

		$fP.fullpage({
			anchors: ['aboutSection', 'awardsSection', 'reviewsSection', 'pressSection', 'certificatesSection'],
			menu: '.fullpage-nav__list',
			normalScrollElements: '.fancybox-image',
			loopBottom: false,
			loopTop: false,
			fadingEffect: false,
			recordHistory: false,
			fixedElements: '.header',
			lazyLoading: false,
			interlockedSlides: true
			// continuousVertical: true
		});

		const $fPress = $('[data-fancybox="press"]');

		$fPress.fancybox({
			loop: true,
			buttons : [
				'close'
			],
			touch : true,
			animationEffect : 'fade',
			animationDuration : 300,
			modal : false,
			wheel : false,
			afterShow : function( instance, current ) {
				var el = document.querySelector('.fancybox-slide--current .fancybox-image:not(.wheelzoomed)');
				var slideCurr = $('.fancybox-slide--current');
				var slideCaption = slideCurr.parent('.fancybox-stage').next().children('.fancybox-caption').text();
				var sliderCaptionQuant = $('.fancybox-image-wrap .fancybox-caption').length;
				var $sliderImageWrap = $('.fancybox-slide--current .fancybox-image-wrap');
				var $sImageWrapImage = $('.fancybox-slide--current .fancybox-image-wrap .fancybox-image');

				if (sliderCaptionQuant > 1) {
				} else {
					$sliderImageWrap.append(slideCurr.parent('.fancybox-stage').next().html());
					$sImageWrapImage.click(function () {
						$(this).toggleClass('fancybox-image_scale');
					});
				}
				if (el) {
					wheelzoom(el, { zoom: 0.05, maxZoom: 2 });
					el.classList.add('wheelzoomed');
				}
			}
		});

		const $fCert = $('[data-fancybox="cartificates"]');

		$fCert.fancybox({
			loop: true,
			buttons : [
				'close'
			],
			touch : true,
			animationEffect : 'fade',
			animationDuration : 300,
			modal : false,
			wheel : false,
			afterShow : function( instance, current ) {
				var el = document.querySelector('.fancybox-slide--current .fancybox-image:not(.wheelzoomed)');
				var slideCurr = $('.fancybox-slide--current');
				var slideCaption = slideCurr.parent('.fancybox-stage').next().children('.fancybox-caption').text();
				var sliderCaptionQuant = $('.fancybox-image-wrap .fancybox-caption').length;
				var $sliderImageWrap = $('.fancybox-slide--current .fancybox-image-wrap');
				var $sImageWrapImage = $('.fancybox-slide--current .fancybox-image-wrap .fancybox-image');

				if (sliderCaptionQuant > 1) {
				} else {
					$sliderImageWrap.append(slideCurr.parent('.fancybox-stage').next().html());
					$sImageWrapImage.click(function () {
						$(this).toggleClass('fancybox-image_scale');
					});
				}
				if (el) {
					wheelzoom(el, { zoom: 0.05, maxZoom: 2 });
					el.classList.add('wheelzoomed');
				}
			}
		});



		const $fAwards = $('[data-fancybox="awards"]');

		$fAwards.fancybox({
			loop: true,
			margin : [ 44, 0, 90, 0 ],
			buttons : [
				'close'
			],
			touch : true,
			animationEffect : 'fade',
			animationDuration : 300,
			modal : false,
			wheel : false,
			afterShow : function( instance, current ) {
				var el = document.querySelector('.fancybox-slide--current .fancybox-image:not(.wheelzoomed)');
				var slideCurr = $('.fancybox-slide--current');
				var slideCaption = slideCurr.parent('.fancybox-stage').next().children('.fancybox-caption').text();
				var sliderCaptionQuant = $('.fancybox-image-wrap .fancybox-caption').length;
				var $sliderImageWrap = $('.fancybox-slide--current .fancybox-image-wrap');
				var $sImageWrapImage = $('.fancybox-slide--current .fancybox-image-wrap .fancybox-image');

				if (sliderCaptionQuant > 1) {
				} else {
					$sliderImageWrap.append(slideCurr.parent('.fancybox-stage').next().html());
					$sImageWrapImage.click(function () {
						$(this).toggleClass('fancybox-image_scale');
					});
				}
				if (el) {
					wheelzoom(el, { zoom: 0.05, maxZoom: 2 });
					el.classList.add('wheelzoomed');
				}
			}
		});

		const $fReview = $('[data-fancybox="reviews"]');

		$fReview.fancybox({
			loop: true,
			margin : [ 44, 0, 90, 0 ],
			buttons : [
				'close'
			],
			touch : true,
			animationEffect : 'fade',
			animationDuration : 300,
			modal : false,
			wheel : false,
			afterShow : function( instance, current ) {
				var el = document.querySelector('.fancybox-slide--current .fancybox-image:not(.wheelzoomed)');
				var slideCurr = $('.fancybox-slide--current');
				var slideCaption = slideCurr.parent('.fancybox-stage').next().children('.fancybox-caption').text();
				var sliderCaptionQuant = $('.fancybox-image-wrap .fancybox-caption').length;
				var $sliderImageWrap = $('.fancybox-slide--current .fancybox-image-wrap');
				var $sImageWrapImage = $('.fancybox-slide--current .fancybox-image-wrap .fancybox-image');
				if (sliderCaptionQuant > 1) {

				} else {
					$sliderImageWrap.append(slideCurr.parent('.fancybox-stage').next().html());
					$sImageWrapImage.click(function () {
						$(this).toggleClass('fancybox-image_scale');
					});
				}

				if (el) {
					wheelzoom(el, { zoom: 0.05, maxZoom: 2 });
					el.classList.add('wheelzoomed');
				}
			}
		});




	});

})(jQuery);
