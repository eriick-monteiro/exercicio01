
function changeColor() {
	//Coletando os dados dos Inputs
	var bgred = document.getElementById('bgred');
	var txred = document.getElementById('txred');
	var bggrn = document.getElementById('bggrn');
	var txgrn = document.getElementById('txgrn');
	var bgblu = document.getElementById('bgblu');
	var txblu = document.getElementById('txblu');
	
	//Pegando dados do Body
	var corpo = window.document.body;
	
	//Coletando dados em Números dos 3 inputs que irão definir a cor do Background
	var bred = document.getElementById('bg0').value
	var bgrn = document.getElementById('bg1').value
	var bblu = document.getElementById('bg2').value
	
	//Coletando dados em Números dos 3 inputs que irão definir a cor do Texto
	var tred = document.getElementById('tx0').value
	var tgrn = document.getElementById('tx1').value
	var tblu = document.getElementById('tx2').value
	
	//Aqui estamos definindo a cor do Background e dos Textos baseados nos dados recebidos dos inputs de Range
	document.body.style.background = `rgb(${bred}, ${bgrn}, ${bblu})`;
	document.body.style.color = `rgb(${tred}, ${tgrn}, ${tblu})`;

	//Escrevendo o número de cada cor em RGB ao lado de cada Input de Range
	bgred.innerText = `${bred}`;
	txred.innerText = `${tred}`;
	bggrn.innerText = `${bgrn}`;
	txgrn.innerText = `${tgrn}`;
	bgblu.innerText = `${bblu}`;
	txblu.innerText = `${tblu}`;
}
