

/* 

const tresHoras = 60 * 60 * 3 * 1000

const umDia = 60 * 60 * 24 * 1000


const data = new Date(0 + tresHoras + umDia ); */

/* const data = new Date(Date.now());
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth()); // mes começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milisegundps', data.getMilliseconds()); 
console.log('Dia semana', data.getDay());   // 0  Domingo - 6 = sabado
console.log(data.toString());


 */

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formatarData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const horas = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`
}


const data = new Date();
const dataBrasil = formatarData(data);
console.log(dataBrasil);
