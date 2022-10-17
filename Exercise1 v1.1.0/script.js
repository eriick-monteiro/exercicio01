
function vol() {
	var corpo = window.document.body;
	var red = document.getElementById('volume0').value
	var grn = document.getElementById('volume1').value
	var blu = document.getElementById('volume2').value
	
	document.body.style.background = "rgb(" + red + "," + grn + "," + blu + ")";
}
