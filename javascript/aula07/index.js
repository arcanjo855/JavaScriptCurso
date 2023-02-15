const nome = 'rafael'
const sobrenome = 'arcanjo'
let idade = 21
let peso = 120
let altura = 1.78

let imc = peso / (altura * altura) 
 
let nascimento = 2022 - idade



console.log(nome,sobrenome,"tem",idade,"anos ,pesa",peso,"kg")
console.log(`tem ${altura} de altura e seu imc é ${imc.toFixed(2)}`)
console.log(nome +" " + sobrenome + " nasceu em " + nascimento)