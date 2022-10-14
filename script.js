var titulo = document.getElementById('titulo')
var corpo = window.document.body;
var color = 'white';
	
function changeColor() {
	if (color == 'white') {
		titulo.style.color = 'red'
		titulo.innerHTML = 'Dark Mode'
		color = 'black'
	} else if (color == 'black') {
		titulo.style.color = 'black'
		titulo.innerHTML = 'Light Mode'
		color = 'white'
	}
	corpo.style.background = color
}