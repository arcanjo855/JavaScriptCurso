



const paragrafos = document.querySelector(".paragrafos");
const ps = document.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor

console.log(backgroundColorBody)


for (let p of ps){
    p.style.background = backgroundColorBody
    p.style.color = "#FFFFFF"
}