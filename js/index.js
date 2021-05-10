window.onload=inicio;

function inicio(){
	document.formulario.prim.onkeypress=solodigitos;
	document.formulario.segun.onkeypress=solodigitos;
	document.formulario.crear.onclick=creacionTejido;
	document.tincion.importar.onclick=importarpatronguardado;
}

function solodigitos(evento){
	var evento=evento || window.event;
	var dato=String.fromCharCode(evento.charCode);
	if(dato <"0"|| dato >"9")
	evento.preventDefault();
	}
function creacionTejido(){
	let prim = parseInt(document.formulario.prim.value);
	let segun = parseInt(document.formulario.segun.value);

	let  tamanno = (prim+segun);
	
		crearTejido(tamanno,segun);	
	
	
}

function crearTejido(tamanno,salto){
	let tamTot = 500;
    let tamaxrect = tamTot/tamanno;
    let canvas = document.getElementById('tejido');
    let ctx = canvas.getContext('2d');
    let x = 0;
    let y = tamTot-tamaxrect;
    let width = tamaxrect;
    let height = tamaxrect;
	let array = new Array(tamanno);
	ctx.clearRect(0,0,tamTot,tamTot);
	array = crearPatron(tamanno,salto);	
	
	for (let j = 0; j < tamanno; j++) {
		x = 0;
		for (let i = 0; i < tamanno; i++) {

			if (array[i][j] == 1){
				ctx.fillStyle = '#E82020';
				ctx.fillRect(x,y,width,height);				
			} else {
				ctx.strokeStyle = '#000000';
				ctx.strokeRect(x,y,width,height);
			}
			
			x += tamaxrect;
		
		}
		y -= tamaxrect;
	}
}


//
function crearPatron(tamanno,salto){
	let array = new Array(tamanno);
	let contpatron = salto;
	for (let j = 0; j < tamanno; j++) {

		let columna = new Array(tamanno); 
		for (let i = 0; i < tamanno; i++) {
		
			if (contpatron > tamanno) {
				
				contpatron = 0 +((columna.length + salto) - contpatron);
			
				columna = crearArray(contpatron, tamanno);
			} else {
				columna = crearArray(contpatron, tamanno);
						
			}
			
			contpatron += salto;
		}
		array[j] =columna;

	}
	
	return array;
}
//crear array no funciona
function crearArray(num,tamanno) {
	let array = new Array(tamanno);
	
	for (let i = 0; i < tamanno; i++) {
		
		 if (i == num) {
			 array[i] = 1;
			 
		 } else {
			 array[i] = 0;
		 }
	}
	
	return array;
	
}

function importarpatronguardado() {
	alert("entra");


}