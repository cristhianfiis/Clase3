var dibujo,lienzo,t,b;
function inicio(){
	t=document.getElementById("usuario");
	b=document.getElementById("dibujalo");
	dibujo=document.getElementById("dibujo");
	b.addEventListener("click",dibujarGrilla);
	lienzo=dibujo.getContext("2d");
	// lienzo.moveTo(0,0);
	// lienzo.lineTo(300,0);
	// lienzo.lineTo(300,300);
	// lienzo.lineTo(0,300);
	// lienzo.lineTo(0,0);	
	// lienzo.strokeStyle="#F00";
	// lienzo.stroke();
	dibujarCirculo(lienzo);


}

function dibujarGrilla(){
	var l = lienzo;
	var rayas=Number(t.value);
	var ancho=alto=300;
	var anchodelinea=ancho/rayas;
	var limiteX = ancho/anchodelinea;
	var limiteY = alto/anchodelinea;
	for (var linea=0;linea<=limiteX;linea++){
		l.beginPath();
		l.strokeStyle="#AAA";
		l.moveTo(linea*anchodelinea,0);
		l.lineTo(linea*anchodelinea,alto);	
		l.closePath();
		l.stroke();
	}

	for (var linea=0;linea<=limiteY;linea++){
		l.beginPath();
		l.strokeStyle="#AAA";
		l.moveTo(0,linea*anchodelinea);
		l.lineTo(ancho,linea*anchodelinea);	
		l.closePath();
		l.stroke();
	}
}
function dibujarCirculo(l){
	l.beginPath();
	l.strokeStyle="#F00";
	l.arc(150,150,100,Math.PI*2,false);
	l.closePath();
	l.stroke();
}
