//FUNÇÃO COMO PARAMETRO


function bomDia(){
    console.log('Bom dia!')
}

const boaTarde = function () {
    console.log("Boa tarde!!")
}

// 1) Passando uma função como parametro para outra função
function executarQualquerCoisa(fn) {
    if( typeof fn === 'function') {

        fn()
    }
    
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// 2) Retornar uma função a partir de uma outra função

function potencia(base) {
    
    return function(exp) {

        return Math.pow(base, exp)

    }
}

// potenciaDe2 é uma variavel que guarda a "base" 2 para ser usada posteriormente
const potenciaDe2 = potencia(2)

// Agora potenciaDe2 pode ser usada como uma função, ja previamente com a "base" 2 armazenada
// agora basta chamar potenciaDe2(exp) agora o exp como valor que vai elevar
const potenciaDe2Elevado8 = potenciaDe2(8)

//Imprimindo o valor final
console.log(potenciaDe2Elevado8)


// Outra forma de passar os valores dos parametros para as funções em diferentes "níveis"
const bits8 = potencia(2)(8)

console.log(bits8)