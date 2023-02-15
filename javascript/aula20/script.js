


/* 

    Entre 00 e 11 - bom dia
    entre 12 e 17 - boa tarde
    entre 18 e 23 - boa noite

*/


const hora = 12;

if(hora >= 0 && hora <= 11){
    console.log('bom dia')
}else if(hora >= 12 && hora <=17){
    console.log('boa tarde')
}else if(hora >= 18 && hora <= 23){
    console.log('boa noite')
}else{
    console.log('horario invalido')
}