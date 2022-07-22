//CALLBACK
//O setInterval recebe 2 parametros, o primeiro é uma função e o segundo é a quantidade
//de tempo que aquela função sera executada ininterruptamente

const cb = () => console.log('Exec...')

setInterval(cb, 1000 )
//tambem funciona assim
setInterval(() => console.log('Exec 2...'), 1000)

setInterval(function(){

    console.log('Exec 3 ...')

}, 1000)