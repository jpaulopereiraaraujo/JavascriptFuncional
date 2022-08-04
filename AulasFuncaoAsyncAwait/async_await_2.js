const generateNumbers = (min, max, forbNumbers) => {
    if (min > max) [max, min] = [min, max]
    
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatory = parseInt(Math.random()*fator) + min
        if (forbNumbers.includes(aleatory)){
            reject('Número repetido')

        } else {

            resolve(aleatory)
        }
         
    })
}

const runLotery = async (qtNumbers, trying = 1) => {
    const numbers = []
    try {
        for (let _ of Array(qtNumbers).fill()) {
        numbers.push(await generateNumbers(1, 60, numbers))
    }
    return numbers

    } catch(e) {
        if (trying > 1000000) {
            throw "Não foi possível gerar números"
        } else {
            return runLotery(qtNumbers, trying + 1)
        }
        
    }
    

    
}

generateNumbers(1 ,5 , [1,2,4])
    .then(console.log)
    .catch(console.log)


runLotery(30)
    .then(console.log)
    .catch(console.log)
