const sliderContainer = document.querySelector('.slider-container');
const sliderWrapper = document.querySelector('.slider-wrapper');

//keep track of user's mouse up and down
let isPressedDown = false;

//x horizontal space of cursor from inner container
let cursorXSpacer;

sliderContainer.addEventListener('mousedown', function(e){
	isPressedDown = true;
	cursorXSpacer = e.offsetX - sliderWrapper.offsetLeft;
	sliderContainer.style.cursor = 'grabbing';
});

sliderContainer.addEventListener('mouseup', function(){
	sliderContainer.style.cursor = 'grab';
});

window.addEventListener('mouseup', function(){
	isPressedDown = false;
});

sliderContainer.addEventListener('mousemove', function(e){
	if(!isPressedDown) return;
	e.preventDefault();
	sliderWrapper.style.left = `${e.offsetX - cursorXSpacer}px` ;
	boundCards();
});

function boundCards(){
	const container_rect = sliderContainer.getBoundingClientRect();
	const wrapper_rect = sliderWrapper.getBoundingClientRect();

	if(parseInt(sliderWrapper.style.left) > 0){
		sliderWrapper.style.left = 0;
	}else if(wrapper_rect.right < container_rect.right){
		sliderWrapper.style.left = `-${wrapper_rect.width - container_rect.width}px`;
	}
}