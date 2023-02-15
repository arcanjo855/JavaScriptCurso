


/*
    && -> false && true -> false 
    || -> true || false ->  Vai retorna o valor verdadeiro


    FALSY VALUE

    false
    0
    "", '', ``
    null / undefined
    NaN

*/


// function falaOI(){
//     return 'oi';
// }


// let vaiExecutar = 'afa';

// console.log(vaiExecutar && falaOI());



console.log(0 || 'rafael' || null || true)


const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao)


const a = 0;
const b = false;
const c = 'false';
const d = NaN;

console.log(a || b || c || d)
