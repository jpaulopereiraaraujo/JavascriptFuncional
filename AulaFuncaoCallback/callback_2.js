const fs = require('fs')
const path = require('path')

//Aqui retorna o caminho do arquivo
const caminho = path.join(__dirname, 'dados.txt')

//O "_" como primeiro parametro indica que aquele parametro n importa, ou n é essencial para o momento
function exibirConteudo(_,conteudo) {
    console.log(conteudo.toString())
}

//Essa função NÃO aguarda o fim da execução do arquivo
console.log("Inicio")
fs.readFile(caminho, {}, exibirConteudo)
//Aqui a função exibir conteudo foi substituida por uma função anonima e arrowfunction
fs.readFile(caminho, {} ,(_, conteudo) => console.log(conteudo.toString()))
console.log('Fim')


//A função readfilesync aguarda o fim da execução da leitura do arquivo, não possui callback
console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')
