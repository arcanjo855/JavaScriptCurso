const dig = Number(prompt("Digite um numero"))



document.getElementById("numeroDigitado").innerHTML = dig
document.getElementById("texto").innerHTML = `<p>Raiz quadrada: ${dig**0.5}</p><p>é inteiro?: ${Number.isInteger(dig)}</p><p>é NaN: ${Number.isNaN(dig)}</p><p>arredondado para cima: ${Math.ceil(dig)}</p><p>arredondado para baixo: ${Math.floor(dig)}</p><p>com duas casas decimais: ${dig.toFixed(2)}</p>`
