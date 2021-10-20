//navbar
let navBar = document.querySelector('.navbar');
let menuBar = document.querySelector('#menu-bar');
let closeBar = document.querySelector('#close');

menuBar.onclick = function(){
	navBar.classList.toggle('active');
}
closeBar.onclick = function(){
	navBar.classList.remove('active');
}

//featured
var smallImg = document.querySelectorAll('.small-image-1');
var smallImg2 = document.querySelectorAll('.small-image-2');
var smallImg3 = document.querySelectorAll('.small-image-3');

smallImg.forEach(function(img){
	img.onclick = function(){
		document.querySelector('.big-image-1').src = img.getAttribute('src');
	}
})
smallImg2.forEach(function(img){
	img.onclick = function(){
		document.querySelector('.big-image-2').src = img.getAttribute('src');
	}
})
smallImg3.forEach(function(img){
	img.onclick = function(){
		document.querySelector('.big-image-3').src = img.getAttribute('src');
	}
})

//coundown
let countDate = new Date('aug, 2021 00:00:00:00').getTime();

function countDown(){
	let now = new Date().getTime();
	gap = now - countDate;

	let seconds = 1000;
	let minutes = seconds * 60;
	let hours = minutes * 60;
	let day = hours * 24;

	let d = Math.floor(gap / (day));
	let h = Math.floor((gap % (day)) / (hours));
	let m = Math.floor((gap % (hours)) / (minutes));
	let s = Math.floor((gap % (minutes)) / (seconds));

	document.getElementById('days').innerText = d;
	document.getElementById('hours').innerText = h;
	document.getElementById('minutes').innerText = m;
	document.getElementById('seconds').innerText = s;
}

setInterval(function(){
	countDown();
}, 1000);


window.onscroll = function(){

	navBar.classList.remove('active');	


	//header
	if(window.scrollY > 100){
		document.querySelector('header').classList.add('active');
	}else{
		document.querySelector('header').classList.remove('active');
	}
}


//theme toggle
let themetoggle = document.querySelector('#theme-toggler');

themetoggle.onclick = function(){
	themetoggle.classList.toggle('fa-sun');
	if(themetoggle.classList.contains('fa-sun')){
		document.querySelector('body').classList.add('active');
	}else{
		document.querySelector('body').classList.remove('active');
	}
}

//swiper
var swiper = new Swiper(".product-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});