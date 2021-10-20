//menu
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = function(){
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

//theme toglle
let themetoggle = document.querySelector('.theme-toggle');
let togglebtn = document.querySelector('.toggle-btn');
let themebtn = document.querySelectorAll('.theme-toggle .theme-btn');

togglebtn.onclick = function(){
	themetoggle.classList.toggle('active');
}

themebtn.forEach(function(btn){
	btn.onclick = function(){
		let color = btn.style.background;
		document.querySelector(':root').style.setProperty('--main-color',color);
	}
})

//scrollspy
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');

//window
window.onscroll = function(){
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
	themetoggle.classList.remove('active');

	//scrollspy
	section.forEach(function(sec){
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if(top >= offset && top < offset + height){
			navLinks.forEach(function(links){
				links.classList.remove('active');
				document.querySelector('.header .navbar a[href*='+ id +']').classList.add('active');
			});
		}
	});
}


// swiper slider
var swiper = new Swiper(".home-slider", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 100,
		modifier: 2,
		slideShadows: true,
	},
	loop:true,
  	autoplay:{
	    delay: 3000,
	    disableOnInteraction:false,
  	}
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    breakpoints: {
		0: {
			slidesPerView: 1,
		},
		700: {
			slidesPerView: 2,
		},
		1050: {
			slidesPerView: 3,
		},    
    },
    autoplay:{
		delay: 5000,
		disableOnInteraction:false,
  	}
});