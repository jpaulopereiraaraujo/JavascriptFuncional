//A promisse retorna um resultado por vez
let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(3)
})

console.log(typeof p)

p.then(function(valor){
    console.log(valor)
})
//Pode se assim
p.then(valor => console.log(valor))

//Exemplo retornando objeto
let ob = new Promise(function(resolve){
    resolve({
        x:3,
        y:4,
        z:5
    })
})

ob.then(function(value){
    console.log(value)
    console.log("==================")
    console.log(value.x)
    console.log("==================")
    console.log(value.y)
    console.log("==================")
    console.log(value.z)
})
//Exemplo array, é possível chamar o then mais de uma vez

let list = new Promise(function(resolve){
    resolve(['Ana','Bia','Carlos','Daniel'])
})

list
    
    .then(value => value[0]) // Aqui é capturado o primeiro elemento da "list", "Ana"
    .then(value => value[0])//"Ana" se torna a variável do segundo, agora é a primeira "A"
    .then(value => console.log(value.toLowerCase()))

//Abaixo tem uma releitura do .then da list

list

    .then(list => list[0])//Primeiro elemento da lista
    .then(primeiroEl => primeiroEl[0])//Primeira letra da palavra
    .then(primeiraLetra => primeiraLetra.toLowerCase()) // Agora transformando a primeira letra em minúscula
    .then(console.log)// Um console.log passado assim, dentro do .then, já se pressupõe que o parametro
    //seja o do .then anterior, .then(console.log) === .then(console.log(primeiraLetra.toLowercase()))


//Agora usando funções

const primeiroElemento = (array) => (array[0])
const primeiraLetra = (word => word[0])
const primeiraLetraMinus = letter => letter.toLowerCase()

list

    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(primeiraLetraMinus)
    .then(console.log)