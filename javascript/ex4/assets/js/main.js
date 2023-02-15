




const elementos = [
    { tag: 'p', texto: 'Frase 1'},
    { tag: 'div', texto: 'Frase 2'},
    { tag: 'section', texto: 'Frase 3'},
    { tag: 'footer', texto: 'Frase 4'},
]



const corpo = document.querySelector(".container");



const div = document.createElement("div");


for( let i = 0; i < elementos.length ; i++){
    let { texto , tag} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}


corpo.appendChild(div);