



// faça uma funçao que recebe um numero e retorne o seguinte:
// Numero é divisivel por 3 = Fizz
// Numero é divisivel por 5 = Buzz
// Numero é divisivel por 3 e 5 = FizzBuzz
// Numero nao é divisivel por 3 e 5 = retorna o proprio numero
// checar se o numero é um numero 
// use a funçao com numeros de 0 a 100





const fizzBuzz = (num) =>{
    if(typeof num !== 'number') return num
    if(num%3==0 && num%5==0) return "FizzBuzz"
    if(num%3==0) return "Fizz"
    if(num%5==0) return "Buzz"
    return num
}



for(i=100;i>=0;i--){
    console.log(i,fizzBuzz(i))
}

