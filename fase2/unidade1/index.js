// const name = 5

// if (name>5){
//     console.log('aqui')
// }else if(name<5){
//     console.log('outroaqui')
// }

//Um programa que calcula a média de dois students
// String: 'string', "string", `template string ${variavel}`

/**
 * --------------------
 * Tipos de strings    |
 * --------------------
 */

// const name = "Marcos" //
// const name2 = 'Corrẽa'
// const name3 = `Marcos ${name2}`
// const grade = 5.3
// const alter = 5=='5' //true // == Igual a (funciona entre 5 (numero) e '5'(string))
// const alter2 = 5==='5' // false // tem que ser do mesmo tipo! Ambos são boolean


// console.log(name)
// console.log(name3)
// console.log(typeof name3) // o tipo da variável
// console.log(typeof grade)
// console.log(typeof alter)
// console.log(alter)

/**
 * ---------------
 * média de grades |
 * ---------------
 */

//  const student1 = "Marcos"
//  const student2 = "Juliana"
//  const noteStudent1 = 6
//  const noteStudent2 = 3.2
//  const noteStudent3 = 2.5

//  const average = (noteStudent1+noteStudent2+noteStudent3)/3

//  console.log(average)

//  if(average>5){
//      console.log("Muito bom, acima de 5.")
//  }else{
//      console.log(`Vish, precisa melhorar, pois sua média foi de ${average}`)
//  }


/**
 * -------------------------
 * Operadores de comparação |
 * -------------------------
 *      >   maior
 *      <   menor
 *      >=  maior ou igual a 
 *      <=  menor ou igual a 
 *      === igual e do mesmo tipo
 *      !=  diferenete de
 *      !== Diferente, inclusive do tipo
 *        
 */

//  console.log(5 !== 5) //falsse
//  console.log(5 !== '5') //true

/**
 * ---------------------------------
 * operadores lógicos e aritmeticos |
 * ---------------------------------
 *      &&  E
 *      ||  Ou 
 *      !   Negação !!
 *
 */

// console.log(5==5 && 6==6) //true
// console.log(5==5 && 6!==6) //false

// console.log(!(5==6)) //true | estou negando o (falso)


// DESAFIO

// const age = 17
// //verificar se a pessoa tem 18 anos ou mais
// //se sim, deixar entrar, se não, bloquear a entrada. Se tiver 17 anos, escrever volte quando tiver 18
// if(!(age>=18) || age===17){
//     console.log('Entrada bloqueada')
// }else{
//     console.log('Entrada liberada')
// }


/**
 * --------
 * objetos |
 * --------
 * O console.log é um objeto que tem um método chamado log
 * Normalmente se cria objeto com prorpiedades, tipo student com name. (student.name) TOOOOP
 */


//  const student01 = {
//     name:"Marcos",
//     grade:9
//  }
//  const student02 = {
//     name:"Juliana",
//     grade:7
//  }
//  const student03 = {
//     name:"Mayk",
//     grade:9
//  }

// const average = (student01.grade + student02.grade + student03.grade)/3
// console.log(average)


/**
 * -----------------
 * vetores (ARRAYS) |
 * -----------------
 * 
 */

//  const student01 = 'marcos'

//  const students = [
//      {
//          name: student01,//se eu colocar sem aspas, ele entende como uma variável
//          grade: 8 
//      }, //importante colocar a vírgula
//      {
//          name: "Corrêa",
//          grade: 8 
//      },
//      {
//          name: "Juliana",
//          grade: 8 
//      }, 
//      {
//          name: "Pelegrini",
//          grade: 8 
//      }
//  ]

 
//  //para acessar é students[0].grade | o dentro dos colchetes é a posição

//  const average = (students[0].grade + students[1].grade + students[2].grade + students[3].grade )/4
//  console.log(students[0].name)


/**
 *------------------------------
 *          FUNÇÕES!            |
 *------------------------------
 */


// const student01 = 'marcos'

// const classA = [
//     {
//         name: student01,//se eu colocar sem aspas, ele entende como uma variável
//         grade: 8 
//     }, //importante colocar a vírgula
//     {
//         name: "Corrêa",
//         grade: 8 
//     },
//     {
//         name: "Juliana",
//         grade: 8 
//     }, 
//     {
//         name: "Pelegrini",
//         grade: 8 
//     }
// ]

// const classB = [
//    {
//        name: 'Marcos',
//        grade: 6 
//    },
//    {
//        name: "Corrêa",
//        grade: 6 
//    },
//    {
//        name: "Juliana",
//        grade: 2 
//    }, 
//    {
//        name: "Pelegrini",
//        grade: 2 
//    }
// ]

// function calculateAverage(students){
//     return (students[0].grade + students[1].grade + students[2].grade + students[3].grade )/4
// }

// const averageclassA = calculateAverage(classA) //console.log(averageclassA)
// const averageclassB = calculateAverage(classB) //console.log(averageclassA)

// function sendMessage(class, average){
//     if(average>5){
//         return(`A média da ${class} foi de ${average}. Parabéns!`)
//     }else{
//         return(`A média da ${class} foi de ${average}. Precisa melhorar.`)
//     }
// }

// const resultadoclassA = sendMessage('classA', averageclassA)
// const resultadoclassB = sendMessage('class B', averageclassB)

// console.log(resultadoclassA)



/**
 * 
 *      ESTRUTURA DE REPETIÇÃO
 * 
 */

// const student01 = 'marcos'

const classA = [
    {
        name: 'Marcos',//se eu colocar sem aspas, ele entende como uma variável
        grade: 4.9
    }, //importante colocar a vírgula
    {
        name: "Corrêa",
        grade: 8
    },
    {
        name: "Juliana",
        grade: 8
    }, 
    {
        name: "Pelegrini",
        grade: 8 
    },
    {
        name: 'Joel',
        grade: 4
    }
]

const classB = [
   {
       name: 'Marcos',
       grade: 6 
   },
   {
       name: "Corrêa",
       grade: 6 
   },
   {
       name: "Juliana",
       grade: 2 
   },
]

function calculateAverage(students){
    let sum = 0
    for (let i = 0 ; i < students.length ; i++){
        sum=sum+students[i].grade
    }
    const average = sum/students.length

    return average // o return para o resto da execução NA HORA!!    
}

const averageclassA = calculateAverage(classA)
// console.log(averageclassA)
const averageclassB = calculateAverage(classB)
// console.log(averageclassB)

function sendMessage(classA, average){
    if(average>5){
        return(`${classA} average: ${average}. Congrats!`)
    }else{
        return(`${classA} average: ${average}. Need study.`)
    }
}

const resultadoclassA = sendMessage('Class A', averageclassA)
const resultadoclassB = sendMessage('Class B', averageclassB)

console.log(resultadoclassA)
console.log(resultadoclassB)


// ESTUDOS FUNÇÃO!! 
//--------------------------------------------------


// //Marcar student como flunked se a grade for menor que 5
// //o atributo de students é um array
// function markAsFlunked(students){
//     // console.log(students)// studentS ENTRA COMO O ARRAY DE OBJETOS "classA", POR EXEMPLO. 
//     for(let student of students){ // CADA OBJETO DE ARRAY, OU POSIÇÃO DE ARRAY, FOR OF FUNCIONA ASSIM.... TOP
//         student.flunked = false; //APLICA PRA TODOS OS studentS A PROPRIEDADE flunked: FALSE.
//         if(student.grade<5){//CONDIÇÃO TROCAR A PROPRIEDADE.
//             student.flunked = true;//PROPRIEDADE TROCADA
//         }
//     }
//     console.table(students)//DEIXA MUITO BONITINHO OS ARRAYS
// }

// markAsFlunked(classA)

//----------------------------------------------------------




function markAsFlunked(student){
    student.flunked = false //APLICA PRA TODOS OS studentS A PROPRIEDADE flunked: FALSE.

    if(student.grade<5){//CONDIÇÃO TROCAR A PROPRIEDADE.
        student.flunked = true//PROPRIEDADE TROCADA
    }
   // console.table(students)//DEIXA MUITO BONITINHO OS ARRAYS
}

//função dentro de função! estudar!!
function studentsFlunked(students){
    for(let student of students){
        markAsFlunked(student)
        sendMessageflunked(student)
    }
}

// e também enviar como mensagem
function sendMessageflunked(student){
    if(student.flunked){
        console.log(`${student.name}, sua grade foi ${student.grade} e você foi flunked`)
    }
}

studentsFlunked(classA)
studentsFlunked(classB)