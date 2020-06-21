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
    }
]


console.log(coders[0])
console.log(`O dev ${coders[0].name} tem ${coders[0].age} anos e trabalha com ${coders[0].technologies[0].nome} em ${coders[0].technologies[0].especialidade}`)