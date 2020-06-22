const technologies = [
    { 
        name: 'C++', 
        camp: 'Desktop' 
    },
    { 
        name: 'Python', 
        camp: 'Data Science' 
    },
    { 
        name: 'JavaScript', 
        camp: 'Web/Mobile' 
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
// console.log(coders[0].technologies.length)
// console.log(coders[0].technologies[0].name)

function coderWorkTo(onetech){
    for(let coder of coders){
        const objTecnologias = checkTechnologies(coder, onetech)

        if(objTecnologias[0]){
            console.log(`O dev ${coder.name} trabalha com`,onetech,`em ${objTecnologias[1]} `)
        }
    }
}

function checkTechnologies(coder, tech ){
    for(technology of coder.technologies){
        if(technology.name ===tech){
            return [true,technology.camp]
        }
    }
return false
}

coderWorkTo('JavaScript')
coderCamp('Desktop')

function coderCamp(onecamp){
    for(let coder of coders){
        const objTecnologias = checkCamp(coder, onecamp)

        if(objTecnologias[0]){
            console.log(`O dev ${coder.name} trabalha na área de`,onecamp,`com ${objTecnologias[1]} `)
        }
    }
}

function checkCamp(coder, camp ){
    for(technology of coder.technologies){
        if(technology.camp ===camp){
            return [true,technology.name]
        }
    }
return false
}