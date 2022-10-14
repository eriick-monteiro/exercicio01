var color = 'white';

function changeColor() {
	var titulo = document.getElementById('titulo')
	var texto = document.getElementById('text')
	var corpo = window.document.body;
	
	if (color == 'white') {
		titulo.style.color = 'red'
		text.style.color = 'red'
		titulo.innerHTML = 'Dark Mode'
		color = 'black'
	} 
	else if (color == 'black') {
		titulo.style.color = 'black'
		text.style.color = 'black'
		titulo.innerHTML = 'Light Mode'
		color = 'white'
	}
	corpo.style.background = color
}

function vol() {
	var volume = document.getElementById('volume')
	var corpo = window.document.body;
	var titulo = document.getElementById('titulo')
	var texto = document.getElementById('text')	
	
	if (volume.value >= 5) {
		color = 'white'
	} else {
		color = 'black'
	}
	
	if (color == 'white') {
		titulo.style.color = 'red'
		text.style.color = 'red'
		titulo.innerHTML = 'Dark Mode'
		color = 'black'
	} 
	else if (color == 'black') {
		titulo.style.color = 'black'
		text.style.color = 'black'
		titulo.innerHTML = 'Light Mode'
		color = 'white'
	}
	corpo.style.background = color
}