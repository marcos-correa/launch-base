const technologies = [
    { 
        nome: 'C++', 
        especialidade: 'Desktop' 
    },
    { 
        nome: 'Python', 
        especialidade: 'Data Science' 
    },
    { 
        nome: 'JavaScript', 
        especialidade: 'Web/Mobile' 
    }
]


const coders = [
    {
        name: 'Marcos',
        age: 28,
        technologies: [ technologies[2], technologies[1]]
    },
    {
        name: 'Juliana',
        age: 28,
        technologies: [ technologies[1]]
    },
    {
        name: 'Poliana',
        age: 28,
        technologies: [ technologies[2], technologies[1], technologies[0]]
    }
]

function showCoders(){
    
    for(i=0;i<coders.length;i++){
        let nome = (`${coders[i].name}`)
        let tech = []
        for (j=0;j<coders[i].technologies.length;j++){
            tech[j] = " "+ coders[i].technologies[j].nome
            // console.log(tech)
            // return
        }

        console.log(`${nome} trabalha com:${tech}`)
    }

}

showCoders()



// console.log(coders[0])
// console.log(`O dev ${coders[0].name} tem ${coders[0].age} anos e trabalha com ${coders[0].technologies[0].nome} em ${coders[0].technologies[0].especialidade}`)



// Usuários e tecnologias

// const usuarios = [
//     { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
//     { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
//     { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
//   ]

// for (let usuario of usuarios) {
//     console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
// }

// // Busca por tecnologia
// function checaSeUsuarioUsaCSS(usuario) {
//     for (let tecnologia of usuario.tecnologias) {
//         if (tecnologia == 'CSS') return true
//     }

//     return false
// }

// for (let i = 0; i < usuarios.length; i++) {
//     const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

//     if(usuarioTrabalhaComCSS) {
//         console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
//     }
// }