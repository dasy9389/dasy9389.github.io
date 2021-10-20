//menu
let menuBtn = document.querySelector('#menu-btn');
let navBar= document.querySelector('.nav-bar');

menuBtn.onclick = function(){
	navBar.classList.toggle('active');
	loginForm.classList.remove('active');
	searchForm.classList.remove('active');
}

//login
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form');

loginBtn.onclick = function(){
	loginForm.classList.toggle('active');
	navBar.classList.remove('active');
	searchForm.classList.remove('active');
}


//search
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');

searchBtn.onclick = function(){
	searchForm.classList.toggle('active');
	navBar.classList.remove('active');
	loginForm.classList.remove('active');
}

//window
window.onscroll = function(){
	navBar.classList.remove('active');
	loginForm.classList.remove('active');
	searchForm.classList.remove('active');
}

//theme
let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = function(){
	themeBtn.classList.toggle('fa-sun');

	if(themeBtn.classList.contains('fa-sun')){
		document.body.classList.add('active');
	}else{
		document.body.classList.remove('active');
	}
}



//slider
// const sliderContainer = document.querySelector('.slider-container');
// const sliderTouch = document.querySelector('.review-slider');
// const box = document.querySelectorAll('.slide');
// let width = box[0].offsetWidth + 30;

// sliderTouch.style.minWidth = `${box.length * width}px`;

// let start;
// let change;

// sliderContainer.addEventListener('mousedown', function(e){
// 	start = e.clientX;
// });
// sliderContainer.addEventListener('mousemove', function(e){
// 	e.preventDefault();
// 	let touch = e.clientX;
// 	change = start - touch;
// });
// sliderContainer.addEventListener('mouseup',slideShow);

// //touch events on mobile,tablet
// sliderContainer.addEventListener('touchstart', function(e){
// 	start = e.touches[0].clientX;
// });

// sliderContainer.addEventListener('touchmove', function(e){
// 	e.preventDefault();
// 	let touch = e.touches[0];
// 	change = start - touch.clientX;
// });
// sliderContainer.addEventListener('touchend',slideShow);

// function slideShow(){
// 	if(change > 0){
// 		sliderContainer.scrollLeft += width;
// 	}
// 	else{
// 		sliderContainer.scrollLeft -= width;
// 	}
// }


var swiper = new Swiper(".swiper-container", {
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