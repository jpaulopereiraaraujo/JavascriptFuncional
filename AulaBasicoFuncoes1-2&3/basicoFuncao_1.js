
//Function Declaration
function bomDia() {
    console.log('Bom dia!')
}
bomDia()

//Function Expression

const boaTarde = function() {
    console.log('Boa Tarde!')
}

boaTarde()
//O return é necessário para atribuir o resultado de uma função
//a uma variavel, sem ele a variavel seria undefined

//Flexibilidade nos parametros

function somar(a,b = 0) { // b = 0 resultado padrão
    return a + b
}

let resultado = somar(3,4)

console.log(resultado)

resultado = somar(3,4,5,6,7,8) // Aceita mais parametros do que o pedido

console.log(resultado)


// resultado = somar(3)

// console.log(resultado)