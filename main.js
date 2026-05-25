const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for (let i = 0; i < botoes.length;i++) {
    botoes [i].onclick = function ()

for (let i = 0; j < botoes.length; j++) {
    botoes [j].classList.remove("ativo");
    textos[j].classList.remove("ativo");
}

botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
}

const contadores = document.querySelectorAll(".contador");
const temoObjetivo1 = new Date("2024-06-21t00:00:00");
const temoObjetivo2 = new Date("2024-09-21t00:00:00");
const temoObjetivo3 = mew Date("2024-12-21t00:00:00");
const temoObjetivo4 = new Date("2025-03-21t00:00:00");

const tempos = [tempoObjetivo] {
    let TempoAtual = new Date ();
    let TempoFinal = tempoObjetivo - TempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    sengundos %= 60;
    minutos  %= 60;
    horas %= 24;
    if (TempoFinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
}

function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculatempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculatempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculatempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculatempo(tempos [i])[3];
    }
}

function comecacronometro(){
    atualizaCronometro ();
    serinterval (atualizaCronometro,1000);
    
}