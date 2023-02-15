

const pessoa = {
    nome: "rafael",
    sobrenome: "arcanjo",
    idade: 22,
    endereço: {
        rua: "freddie mercury",
        numero: 70,
    }
};


const { endereço: { rua, numero } } = pessoa;
console.log(rua, numero)

