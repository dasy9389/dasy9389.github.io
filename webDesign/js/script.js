//menu
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = function(){
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

//scrollspy
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');

window.onscroll = function(){
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');

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