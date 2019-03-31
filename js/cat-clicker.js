var fotoAmora = document.getElementsByClassName('foto-amora');
var contador = 0;

for (i = 0; i < fotoAmora.length; i++) {
    fotoAmora[i].addEventListener('click', function () {

        let contadorIndividual = this.parentElement.getElementsByClassName('contador-cliques');
        contadorIndividual[0].innerText++;        
        
    });
}

function nomeGatinha() {
    let nomes = ["Junior", "Tepha", "Carinhosa", "Curiosa", "Ajudante"];
    for (i = 0; i < fotoAmora.length; i++) {
        let cxNome = document.createElement("h2");
        cxNome.className = "nome-gatinha";
        cxNome.innerText = nomes[i];
        fotoAmora[i].parentElement.insertBefore(cxNome, fotoAmora[i]);
    }
}
function mostraContador(){
    for (i = 0; i < fotoAmora.length; i++) {
        let cxContador = document.createElement("h2");
        cxContador.className = "contador-cliques";
        cxContador.innerText = contador;
        fotoAmora[i].parentElement.insertBefore(cxContador, fotoAmora[i].nextSibling);
    }
}


nomeGatinha();
mostraContador();