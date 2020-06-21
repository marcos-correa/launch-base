/**
 * Calculo de APOSENTADORIA
 */


/*



O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;

Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
Com base nas regras acima imprima na tela as mensagens:

SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;
Dica: Você pode unir duas condições, veja o exemplo abaixo

if (condicao1) {
    if (condicao2) {
        // Condição 1 e 2 passaram
    } else {
        // Condição 1 passou, porém condição 2 não passou
    }
} else {
    // Condição 1 não passou
}



*/


const name = "Silvana";
const gender = 'F';
const age = 75;
const contribution = 0;

let message = ""

const retirmentFemale = 85
const retirmentMale = 95
const retirmentTime = age + contribution

const manRetirment = gender == 'M' && retirmentTime >= retirmentMale
const womanRetirment = gender == 'F' && retirmentTime >= retirmentFemale

if (manRetirment || womanRetirment ){
    message=`${name}, você já pode se aposentar`
}else if(gender=="M"){
    message=`${name}, você ainda não pode se aposentar. Trabalhe por mais ${retirmentMale - retirmentTime} anos.`
}else{
    message=`${name}, você ainda não pode se aposentar. Trabalhe por mais ${retirmentFemale - retirmentTime} anos.`
}

console.log(message)

// if(gender=="M"){
//     if(retirmentTime>=95){
//         message=`${name}, você já completou e já pode se aposentar`
//     }else{
//         message=`${name}, você ainda não pode se aposentar. Trabalhe por mais ${retirmentMale - retirmentTime} anos.`   
//     }

// }else{
//     if(retirmentTime>=85){
//         message=`${name}, você já completou e já pode se aposentar`
//     }else{
//         message=`${name}, você ainda não pode se aposentar. Trabalhe por mais ${retirmentFemale - retirmentTime} anos.`
//     }
// }

// console.log(message)