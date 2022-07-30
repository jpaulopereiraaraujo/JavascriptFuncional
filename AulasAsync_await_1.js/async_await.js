function waitFor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log()
            resolve()
        }, tempo)
    })
}

//O await so pode ser usado dentro de uma funcao async
//O async/await serve para vc ter um codigo que parace sincrono mas e assincrono
//Ou seja o codigo espera ate o evento/acao/execucao acontecer, para ai entao ser executado
waitFor()
    .then(()=>console.log('Executando promise 1 ...'))
    .then(waitFor)
    .then(()=>console.log('Executando promise 2 ...'))
    .then(waitFor)
    .then(()=>console.log('Executando promise 3 ...'))


    function retornarValor(){
        return new Promise(resolve => {
            setTimeout(() => resolve(10), 5000 )
        })
    }
    //Sem o await a exec ocorre imediatamente, o tempo do setTimeout n e esperado
    const executeNoAwait = async () => {
        waitFor(1500)
        console.log('Async/Await 1...')
        waitFor(1500)
        console.log('Async/Await 2...')
        waitFor(1500)
        console.log('Async/Await 3...')

    }
    //Com o await a exec ocorre igual ao .then
    const executeAwait = async () => {
        let valor = await retornarValor()

        await waitFor(1500)
        console.log('Async/Await 1...')
        console.log(`Async/Await ${valor + 1}`)
        await waitFor(1500)
        console.log('Async/Await 2...')
        console.log(`Async/Await ${valor + 2}`)
        await waitFor(1500)
        console.log('Async/Await 3...')
        console.log(`Async/Await ${valor + 3}`)

    }

executeNoAwait()
executeAwait()
