//Criar uma função somar que possua mais 2 funções dentro dela, uma "cascata" de funções
//somar (3)(4)(5)

function somar (num1 = 0) {
    return function (num2 = 0) {
        return function (num3 = 0) {
            const result = num1 + num2 + num3
            return result
        }
    }
}

function sub (num1 = 0) {
    return function (num2 = 0) {
        return function (num3 = 0) {
            const result = num1 - num2 - num3
            return result
        }
    }
}

function mult (num1 = 1) {
    return function (num2 = 1) {
        return function (num3 = 1) {
            const result = num1 * num2 * num3
            return result
        }
    }
}

console.log(somar(3)(4)(5))


//Criar uma função tbm em "cascata" mas que receba uma outra função como parâmetro
//fn -> 3 * 7
//fn -> 3 + 7
// fn -> 3 - 7

//calcular (3)(7)(fn)

function calcular(num1 = 0) {
    return function (num2 = 0){
        return function (fn = somar){
                return fn(num1)(num2)()
        }

    }
}
// No "return fn" a adição do parentesis vazio foi necessária para q as funcoes auxiliares
// podessem usar seus valores de variáveis padrao, sem o parentesis final n funcionaria
console.log(calcular(3)(7)(sub))
console.log(calcular(3)(7)(somar))
console.log(calcular(3)(7)(mult))