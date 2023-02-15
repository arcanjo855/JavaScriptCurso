


const h1 = document.querySelector(".container h1");

const data = new Date();


function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0:
            diaSemanaTexto = "Domingo";
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = "Segunda-feira";
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = "Terça-feira";
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = "Quarta-feira";
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = "Quinta-feira";
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = "Sexta-feira";
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = "sabado";
            return diaSemanaTexto;
        default:
            diaSemanaTexto = "";
            return diaSemanaTexto;
    }
}

function getMesAno(mesAno){
    let mesAnoTexto;
    switch(mesAno){
        case 0:
            mesAnoTexto = "janeiro";
            return mesAnoTexto;
        case 1:
            mesAnoTexto = "fevereiro";
            return mesAnoTexto;
        case 2:
            mesAnoTexto = "março";
            return mesAnoTexto;
        case 3:
            mesAnoTexto = "abril";
            return mesAnoTexto;
        case 4:
            mesAnoTexto = "maio";
            return mesAnoTexto; 
        case 5:
            mesAnoTexto = "junho";
            return mesAnoTexto;
        case 6:
            mesAnoTexto = "julho";
            return mesAnoTexto;
        case 7:
            mesAnoTexto = "agosto";
            return mesAnoTexto;
        case 8:
            mesAnoTexto = "setembro";
            return mesAnoTexto;
        case 9:
            mesAnoTexto = "outubro";
            return mesAnoTexto;
        case 10:
            mesAnoTexto = "novembro";
            return mesAnoTexto;
        case 11:
            mesAnoTexto = "dezembro";
            return mesAnoTexto;
    }
}

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}
const msg = `${getDiaSemanaTexto(data.getDay())}, ${data.getDate()} de ${getMesAno(data.getMonth())} de ${data.getFullYear()} ` +
            `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`

h1.innerHTML = msg