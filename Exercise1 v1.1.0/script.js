
function vol() {
	var bgred = document.getElementById('bgred');
	var txred = document.getElementById('txred');
	var bggrn = document.getElementById('bggrn');
	var txgrn = document.getElementById('txgrn');
	var bgblu = document.getElementById('bgblu');
	var txblu = document.getElementById('txblu');
	
	var corpo = window.document.body;
	var red = document.getElementById('volume0').value
	var grn = document.getElementById('volume1').value
	var blu = document.getElementById('volume2').value
	
	var tred = document.getElementById('txt0').value
	var tgrn = document.getElementById('txt1').value
	var tblu = document.getElementById('txt2').value
	
	//document.body.style.background = "rgb(" + red + "," + grn + "," + blu + ")";
	document.body.style.background = `rgb(${red}, ${grn}, ${blu})`;
	//document.body.style.color = "rgb(" + tred + "," + tgrn + "," + tblu + ")";
	document.body.style.color = `rgb(${tred}, ${tgrn}, ${tblu})`;

	bgred.innerText = `${red}`;
	txred.innerText = `${tred}`;
	bggrn.innerText = `${grn}`;
	txgrn.innerText = `${tgrn}`;
	bgblu.innerText = `${blu}`;
	txblu.innerText = `${tblu}`;
}
