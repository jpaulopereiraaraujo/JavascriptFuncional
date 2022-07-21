// ARROW FUNCTION, sempre usa uma function expression, ou seja é armazenada em uma variável
//sem as chaves n permite return

const felizNatal = () => console.log('Araraquara')

// se for apenas um parametro pode remover os parentesis
const saudacao = nome => "Fala " + nome + ", blz???"

felizNatal()

const saudacao2 = (nome) => `Fala ${nome}, blz?!!`
console.log(saudacao('Maria'))
// quando a função tem corpo, chaves, ela pode t er um return
// o operador ...variável permite adição de parâmetros flexiveis, quantos forem adicionados serão usados
const somar = (...numeros) => {
    let total = 0
    for (let n of numeros) {
        total+=n
    }

    return total
}

console.log(somar(1,2,3,4,5,6,7,8,9,10))

//mini desafio, transformar a função abaixo em uma arrou function

function potencia(base) {
    return function(exp) {
        return Math.pow(base,exp)
    }
}

const pot = (base) => {
    return (exp) => {
        return Math.pow(base,exp)
    }
}
//enxugando, pot = pot2, veja que foram retirados os parentesis, pq é apenas uma variavel, tbm foram
//retiradas as chaves e os returns

const pot2 = base => exp => Math.pow(base, exp)

const subtrair = (a,b) => a - b

console.log(subtrair(6,1))

console.log(pot(2)(2))

console.log(pot2(2)(2))
