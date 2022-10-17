
function vol() {
	var bgred = document.getElementById('bgred');
	var txred = document.getElementById('txred');
	var bggrn = document.getElementById('bggrn');
	var txgrn = document.getElementById('txgrn');
	var bgblu = document.getElementById('bgblu');
	var txblu = document.getElementById('txblu');
	
	var corpo = window.document.body;
	
	var bred = document.getElementById('bg0').value
	var bgrn = document.getElementById('bg1').value
	var bblu = document.getElementById('bg2').value
	
	var tred = document.getElementById('tx0').value
	var tgrn = document.getElementById('tx1').value
	var tblu = document.getElementById('tx2').value
	
	//document.body.style.background = "rgb(" + red + "," + grn + "," + blu + ")";
	document.body.style.background = `rgb(${bred}, ${bgrn}, ${bblu})`;
	//document.body.style.color = "rgb(" + tred + "," + tgrn + "," + tblu + ")";
	document.body.style.color = `rgb(${tred}, ${tgrn}, ${tblu})`;

	bgred.innerText = `${red}`;
	txred.innerText = `${tred}`;
	bggrn.innerText = `${grn}`;
	txgrn.innerText = `${tgrn}`;
	bgblu.innerText = `${blu}`;
	txblu.innerText = `${tblu}`;
}