




function random(min,max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}   

const min = 1
const max = 50

rant = 10
while(rant !== 10){
    rant = random(min, max)
    console.log(rant)
}

console.log("#######")

do {
    rant = random(min, max)
    console.log(rant)
}while(rant !== 10);