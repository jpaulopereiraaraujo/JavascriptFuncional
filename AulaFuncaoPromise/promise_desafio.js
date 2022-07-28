const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

//Uma forma

const readContent = (_,data) => { 
    
    return new Promise (resolve => {
        resolve(data.toString())

}).then(dataString => console.log(dataString))
} 

fs.readFile(caminho,{},readContent)

//Outra forma


const myReader = (caminho) => {

    return new Promise (resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        } )
    }).then(dataString => console.log(dataString))

}

myReader(caminho)