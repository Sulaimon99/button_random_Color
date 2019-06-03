const buttoncolor = document.querySelector('.classBtn');
const background = document.querySelector('body');

const colors = ["yellow","red","green","blue","black"];

buttoncolor.addEventListener('click', changeColor);


function changeColor() {
	//background.style.backgroundcolor = red;

	let random = Math.floor(Math.random()*colors.length)
	background.style.backgroundColor = colors[random];
	
}