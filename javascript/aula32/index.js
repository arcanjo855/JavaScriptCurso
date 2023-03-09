




function mostrarHOra(){
    const data = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12 : false
    })
}

/* function funcaoDoIntervalo(){
    console.log(mostrarHOra())
}
 */

const timer = setInterval(function(){
    console.log(mostrarHOra());
}, 1000)


setTimeout(function(){
    clearInterval(timer)
},3000)

setTimeout(function(){
    console.log("OLA")
},5000)