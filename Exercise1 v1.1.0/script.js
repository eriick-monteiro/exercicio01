function vol() {
	var corpo = window.document.body;
	var textos = window.document.body.h1;
	var red = document.getElementById('volume0').value
	var grn = document.getElementById('volume1').value
	var blu = document.getElementById('volume2').value
	
	var tred = document.getElementById('txt0').value
	var tgrn = document.getElementById('txt1').value
	var tblu = document.getElementById('txt2').value
	
	document.body.style.background = "rgb(" + red + "," + grn + "," + blu + ")";
	document.body.style.color = "rgb(" + tred + "," + tgrn + "," + tblu + ")";
}
