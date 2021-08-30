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
