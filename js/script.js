let mySwiper = new Swiper('.swiper-container', {


    slidesPerView: 1,
    loop: true,
    navigation: {
    	nextEl: '.next-prev',
    	prevEl: '.back-prev',
    },
    breakpoints: {
    	768: {
    		slidesPerView: 2,
    	}
    }


});

let menuButton = document.querySelector('.header__burger');
let menu = document.querySelector('header');
let html = document.querySelector('html');

menuButton.addEventListener('click', function () {
	menuButton.classList.toggle('header__burger-active');
	menu.classList.toggle('header-active');
	html.classList.toggle('no-scroll');
});



$(document).ready(function(){
	$(".default_option").click(function(){
		$(this).parent().toggleClass("active");
	});

	$(".select_ul li").click(function(){
		var currentele = $(this).html();
		$(".default_option li").html(currentele);
		$(this).parents(".select_wrap").removeClass("active");
	});

	$(".default_options").click(function(){
		$(this).parent().toggleClass("active");
	});

	$(".select_uls li").click(function(){
		var currentele = $(this).html();
		$(".default_options li").html(currentele);
		$(this).parents(".select_wraps").removeClass("active");
	});
});