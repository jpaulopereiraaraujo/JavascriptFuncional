function generateNumbersBetween(min, max, tempo) {
    if (min>max) [max,min] = [min,max] 
        return new Promise( resolve => {
            setTimeout(() => {
                const fator = max - min + 1
                const aleatory = parseInt(Math.random() * fator + min)
                resolve(aleatory) 
            }, tempo)
            

        })
    }
    //Chamando várias promises e usando o them, apenas quando terminar a execução de todas, Promise.alll

    function generateAlotNumbers() {
        return Promise.all([
            generateNumbersBetween(1,60,4000),
            generateNumbersBetween(1,60,1000),
            generateNumbersBetween(1,60,500),
            generateNumbersBetween(1,60,3000),
            generateNumbersBetween(1,60,100),
            generateNumbersBetween(1,60,1500),
        ])
    }

    //console.time e o console.timeEnd sao utilizados como contadores de tempo
    console.time("Tempo de exec da promise")

    generateAlotNumbers()
        .then(numbers => console.log(numbers))
        .then(() => {

            console.timeEnd("Tempo de exec da promise")
        })