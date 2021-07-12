'use strict';

window.onload = function() {
	// page-nav
	let menuTriggers = document.querySelectorAll('.header__menu, .page__darker, .main-nav__link, .side-nav__button'),
		pageBody = document.querySelector('body');
	for (let menuTrigger of menuTriggers) {
		menuTrigger.addEventListener('click', function () {
			pageBody.classList.toggle('open-nav');
		});
	}

	// scroll
	$('a.main-nav__link[href^="#"]').on('click', function() {
		let href = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
	
	//inputmask
	let inputList = document.querySelectorAll('[data-input-mask]');
	for (let input of inputList) {
		let im = new Inputmask("+7 (999) 999-99-99");
		im.mask(input);
	}
	
	//modal
	const modals = new HystModal({
		linkAttributeName: "data-hystmodal"
	});
	
	// cookies
	let cookiesPanel = document.querySelector('.cookies-message'),
		cookiesButton = document.querySelector('.cookies-message__button');
	cookiesButton.addEventListener('click', function () {
		cookiesPanel.remove()
	});
};