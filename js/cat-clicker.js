var fotoAmora = document.getElementById('foto-amora');
var contador = 0;
fotoAmora.addEventListener('click', function(){
    contador++;
    console.log("Vc clicou: " + contador + "x");
},false);