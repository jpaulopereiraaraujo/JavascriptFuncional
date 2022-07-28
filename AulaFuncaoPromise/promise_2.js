//E executado de fora pra entro, 3500 -> 3000 -> 2000, independente do tempo

// setTimeout(() => {
//     console.log('Executando callback 3500...')

//         setTimeout(() => {
        
//             console.log('Executando callback 3000...')

//                 setTimeout(() => {

//                     console.log('Executando callback 2000...')


//             },2000)

//         }, 3000)

// }, 3500)

//Usando promise:

function waitFor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Executando promise 1...")
            resolve('Vishhhh')
        }, tempo)
    })
}

waitFor().then(texto => console.log(texto))

let waitFor2 = (tempo = 2000) => {
    return new Promise( resolve => {
        setTimeout(() => {
            console.log("Executando promise 2...")
            resolve('Vishhhh 2','Vishhhh apendice')
        }, tempo)

    })
}
//O .then trabalha em cima do resolve, a funcao waitfor possui internamente
//um
waitFor2()
            .then(() => waitFor())
            .then(waitFor2)

