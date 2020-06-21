const technologies = [
    { 
        name: 'C++', 
        especialidade: 'Desktop' 
    },
    { 
        name: 'Python', 
        especialidade: 'Data Science' 
    },
    { 
        name: 'JavaScript', 
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
// console.log(coders[0].technologies.length)
// console.log(coders[0].technologies[0].name)

function showCoders(){
    let resumeCoders = []

    for(i=0;i<coders.length;i++){
        let name = (`${coders[i].name}`)
        let tech = []
        for (j=0;j<coders[i].technologies.length;j++){
            tech[j] = " "+ coders[i].technologies[j].name
        }

        resumeCoders[i]= `${name} trabalha com:${tech}`
    }
    return resumeCoders
}

const resumeCoders = showCoders()
// console.log(resumeCoders)


function showTechCoders(){
    let resumeTechCoders = []

    for(i=0;i<coders.length;i++){
        let name = coders[i].name
        let tech = []

        for (j=0;j<coders[i].technologies.length;j++){
            tech[j] = coders[i].technologies[j].name
        }

        resumeTechCoders[i]=[name].concat(tech)
    }
    return resumeTechCoders
}


const resumeTechCoders = showTechCoders()

function searchTechCoders(language){
    for(i=0;i<resumeTechCoders.length;i++){
        if(resumeTechCoders[i].indexOf(language) != -1 ){ 
            console.log(`${resumeTechCoders[i][0]} trabalha com ${language}`)
        }else{  
        }
    }
}


const selectLanguage = 'JavaScript'
const searchCoder = searchTechCoders(selectLanguage)


