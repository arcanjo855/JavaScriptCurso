


const numeros = [0,1,2,3,4,5,6,7,8,9]



for(let numero of numeros){
    if(numero == 2){
        console.log("pulei o numero 2")
        continue
    }
    if(numero == 8){
        break
    }
    console.log(numero)
}