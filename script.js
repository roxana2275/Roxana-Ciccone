var inputMensaje=document.querySelector("#mensaje");
var inputResultado=document.querySelector("#resultado");

var btnEncriptar=document.querySelector("#encriptar");
var btnDesencriptar =document.querySelector("#desencriptar");
var btnCopiar=document.querySelector("#copiar");
var btnLimpiar=document.querySelector("#limpiar");



/*
Validacion
/^[A-Z]+$/i
^ indica que el patrón debe iniciar con los caracteres dentro de los corchetes
[A-Z] indica que los caracteres admitidos son letras del alfabeto
+ indica que los caracteres dentro de los corchetes se pueden repetir

$ indica que el patrón finaliza con los caracteres que están dentro de los corchetes.

i indica que validaremos letras mayúsculas y minúsculas (case-insensitive)
*/
function encriptar(){
	var mensaje= inputMensaje.value;
	//let text = "Is this all there is?";
	let pattern = /[^a-z]/g;
	if (mensaje===""||mensaje.match(pattern)){
		alert ("Solo letras minúsculas, sin acento")
	}else{
	
	var mensajeEncriptado=mensaje
		.replaceAll("e","enter")
		.replaceAll("o","ober")
		.replaceAll("i","imes")
		.replaceAll("a","ai")
		.replaceAll("u","ufat");
		inputResultado.value = mensajeEncriptado;
	}	

}

function desencriptar(){

	var mensajeEncriptado = inputMensaje.value;
	var mensaje= mensajeEncriptado
	.replaceAll("enter","e")
	.replaceAll("ober","o")
	.replaceAll("imes","i")
	.replaceAll("ai","a")
	.replaceAll("ufat","u");

	inputResultado.value=mensaje;
	form.reset();
}

function copiar(){
	var mensajeEncriptado= inputResultado.value;
	navigator.clipboard.writeText(mensajeEncriptado);
}

function limpiar(){
	inputMensaje.value=("");
	inputResultado.value=("");
}


btnEncriptar.onclick=encriptar;
btnDesencriptar.onclick= desencriptar;
btnCopiar.onclick = copiar;
btnLimpiar.onclick=limpiar;




/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/