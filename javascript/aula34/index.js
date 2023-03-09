

(function(idade, peso, altura){

    const sobrenome = 'arcanjo'

    function criaNome(){
        const nome = 'rafael'
        return nome + ' ' + sobrenome
    }

    function falaNome(){
        console.log(criaNome())
    }


    falaNome()
    console.log(idade,peso,altura)

})(22,120,1.80);

