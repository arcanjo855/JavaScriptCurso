



const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Arcanjo',
    idade: 21,

    fala (){
        console.log(`a minha iadade atual é ${this.idade}`)
    },
    incrementaIdade(){
        this.idade++;
    }
};




pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()






// const criaPessoa = (nome,sobrenome,idade) =>{
//     return {nome,sobrenome,idade};
// }

// const pessoa1 = criaPessoa('Rafael', 'Arcanjo', 21)
// const pessoa2 = criaPessoa('daniel', 'Arcanjo', 17)
// const pessoa3 = criaPessoa('miguel', 'Arcanjo', 39)
// const pessoa4 = criaPessoa('gabriel', 'Arcanjo', 1)


// console.log(pessoa1)
// console.log(pessoa2)
// console.log(pessoa3)
// console.log(pessoa4)