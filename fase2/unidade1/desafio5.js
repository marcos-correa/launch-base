const html = 'HTML'
const css = 'CSS'
const js = 'JavaScript'
const node = 'Node.js'

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

function addUser(nome,tecnologias){
    usuarios.push({
        nome: nome,
        tecnologias:[tecnologias] 
    })
}


addUser('Marcos',js)

function trabalhaComLanguage(language){
    for (let usuario of usuarios){
        const htmleditor= checarHTML(usuario, language)
        if(htmleditor){
        console.log(`o usuario ${usuario.nome} trabalha com ${language}`)
        }
    }
}

function checarHTML(usuario, language){
    
    for(tecnologia of usuario.tecnologias){
        if(tecnologia==language){
            return true
        }
    }
return false
}


trabalhaComLanguage(js)