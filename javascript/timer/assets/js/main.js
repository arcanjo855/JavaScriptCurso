


const relogio = document.querySelector(".relogio")
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");


const criarHora = (segundos) =>{
    const data = new Date(segundos*1000)
    return data.toLocaleTimeString('pt-BR',{
    hour12 : false,
    timeZone: 'GMT'})
}


let segundos = 0;
let timer;

const iniciarRelogio = () =>{
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criarHora(segundos);
    },1000)
}



iniciar.addEventListener('click',function(event){
    clearInterval(timer)
    relogio.classList.remove('pausado')
    iniciarRelogio()
})


pausar.addEventListener('click',function(event){
    relogio.classList.add('pausado')
    clearInterval(timer)
});

zerar.addEventListener('click',function(event){
    clearInterval(timer)
    relogio.classList.remove('pausado')
    segundos = 0
    relogio.innerHTML = '00:00:00'
});


const contador = (horas,minutos,segundos) =>{
    setInterval(function(){
        segundos++
    },1000)
    if (segundos >59){
        segundos = 0
        minutos++
    }
    
}