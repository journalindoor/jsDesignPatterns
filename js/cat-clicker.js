var fotoAmora = document.getElementsByClassName('foto-amora');

var contador = 0;
var cxContador = document.createElement("h2");
cxContador.className = "contador-cliques";
document.body.appendChild(cxContador);


for(i=0;i<fotoAmora.length;i++){
    fotoAmora[i].addEventListener('click', function(){
        cxContador.innerHTML = contador++;
    });
}

function nomeGatinha(){
    let nomes = ["Amora Jr", "Amora Tepha"];
    for(i=0;i<fotoAmora.length;i++){
        let cxNome = document.createElement("h3");
        cxNome.className = "nome-gatinha";
        cxNome.innerText = nomes[i];
        fotoAmora[i].parentElement.insertBefore(cxNome,fotoAmora[i]);
    }
}
nomeGatinha();