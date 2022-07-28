let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(3)
})

console.log(typeof p)

p.then(function(valor){
    console.log(valor)
})

let listaClientes = new Promise (function(resolve){
    resolve({

        id001: {
            Nome: "André",
            Idade: 30,
            Sexo: 'M'

        },
        id002: {
            Nome: "Bianca",
            Idade: 31,
            Sexo: 'F'

        },
        id003: {
            Nome: "Carina",
            Idade: 22,
            Sexo: 'MF'

        },
        id004: {
            Nome: "Diogo",
            Idade: 39,
            Sexo: 'M'

        },

    })
})

listaClientes
                .then(lista => lista.id001)
                


