document.addEventListener("DOMContentLoaded", function () {

	// -------------------------- Input Mask --------------------------
	$('.contact__input-phone').inputmask({ "mask": "+7(999)999-99-99" });
	// -------------------- Hamburger & Navigation --------------------
	let close_nav = function () {
		$('.hamburger').removeClass('is-active');
		$('.header-nav__content').slideUp(400);
	};

	$('.hamburger').click(() => {
		let elem = $('.header-nav__content');
		let display = elem.css('display');
		console.log(elem);
		console.log(display);
		if (display == 'none') {
			$('.hamburger').addClass('is-active');
			$('.header-nav__content').slideDown(400);
		}
		if (display == 'block') {
			close_nav();
		}
	}
	);
	// ------------------- Page scrolling functions -------------------
	$(window).scroll(() => {
		let width = $(this).width();
		let height = $(this).scrollTop();
		if (height > 1) {
			$('.header-nav').addClass('header-nav--scroll');
			$('.nav-main').addClass('active');
		} else {
			$('.header-nav').removeClass('header-nav--scroll');
		};

		let scroll_about = $('.about').offset().top;
		if (height > scroll_about - 200) {
			$('.nav-main').removeClass('active');
			$('.nav-about').addClass('active');
		} else {
			$('.nav-about').removeClass('active');
		}
		let scroll_skills = $('.skills').offset().top;
		if (height > scroll_skills - 200) {
			$('.nav-about').removeClass('active');
			$('.nav-skills').addClass('active');
		} else {
			$('.nav-skills').removeClass('active');
		}
		let scroll_portfolio = $('.portfolio').offset().top;
		if (height > scroll_portfolio - 200) {
			$('.nav-skills').removeClass('active');
			$('.nav-portfolio').addClass('active');
		} else {
			$('.nav-portfolio').removeClass('active');
		}
		let scroll_contact = $('.contact').offset().top;
		if (height > scroll_contact - 200) {
			$('.nav-portfolio').removeClass('active');
			$('.nav-contact').addClass('active');
		} else {
			$('.nav-contact').removeClass('active');
		}


		$('.nav-main').click(() => {
			$('html, body').stop().animate({ scrollTop: 0 }, 1000, 'swing');
			if (width < 768) {
				close_nav();
			}
		});
		$('.nav-about').click(() => {
			$('html, body').stop().animate({ scrollTop: scroll_about - 50 }, 1000, 'swing');
			if (width < 768) {
				close_nav();
			}
		});
		$('.nav-skills').click(() => {
			$('html, body').stop().animate({ scrollTop: scroll_skills - 50 }, 1000, 'swing');
			if (width < 768) {
				close_nav();
			}
		});
		$('.nav-portfolio').click(() => {
			$('html, body').stop().animate({ scrollTop: scroll_portfolio - 50 }, 1000, 'swing');
			if (width < 768) {
				close_nav();
			}
		});
		$('.nav-contact').click(() => {
			$('html, body').stop().animate({ scrollTop: scroll_contact - 50 }, 1000, 'swing');
			if (width < 768) {
				close_nav();
			}
		});


		$('.header').css({
			"top": (height / 2) + "px"
		})
		$('.header-composition').css({
			"top": -(height / 2) + "px"
		})
	});
});
