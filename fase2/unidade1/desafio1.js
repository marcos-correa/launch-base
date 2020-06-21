/**
 * Calculo de IMC
 */


const name = "Marcos"
const weight = 52
const height = 1.63

const imc = weight/(height**2) // **elevado a 2 = height*height
const idealImc = 30

// console.log(imc)

console.log(imc)
if(imc>=idealImc){
    console.log(`${name}, você precisa comer menos, vocês está acima do peso.`)
}else if(imc<30 && imc>=18){
    console.log(`${name}, vocẽ não está acima do peso e em muito abaixo`)
}else{
    console.log(`${name}, você precisa comer mais!!!!`)
}
