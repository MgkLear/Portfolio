document.addEventListener("DOMContentLoaded", function () {

	// ------------------- Input Mask -------------------
	// $('.contact__input-phone').inputmask({ "mask": "+7(999)999-99-99" });
	// ------------------- Page scrolling functions -------------------
	$(window).scroll(() => {
		let height = $(this).scrollTop();
		if (height > 50) {
			$('.header-nav').addClass('header-nav--scroll');
			$('.nav-main').addClass('active');
		} else {
			$('.header-nav').removeClass('header-nav--scroll');
		};

		let scroll_about = $('.about').offset().top;
		console.log(scroll_about);
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
		});
		$('.nav-about').click(() => {
			$('html, body').stop().animate({ scrollTop: scroll_about }, 1000, 'swing');
		});
		$('.nav-skills').click(() => {
			$('html, body').stop().animate({ scrollTop: scroll_skills }, 1000, 'swing');
		});
		$('.nav-portfolio').click(() => {
			$('html, body').stop().animate({ scrollTop: scroll_portfolio }, 1000, 'swing');
		});
		$('.nav-contact').click(() => {
			$('html, body').stop().animate({ scrollTop: scroll_contact }, 1000, 'swing');
		});


		$('.header').css({
			"top": (height / 2) + "px"
		})
		$('.header-composition').css({
			"top": -(height / 2) + "px"
		})
	});
});
