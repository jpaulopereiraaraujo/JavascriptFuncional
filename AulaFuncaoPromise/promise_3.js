function generateNumbersBetwen(min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise (resolve => {
        const factor = max - min + 1
        const aleatory = parseInt(Math.random() *factor) + min
        resolve(aleatory)
    })
}

generateNumbersBetwen(10,30)    
                                // .then(console.log) o console.log não pode ser
                                .then(num => num*10)
                                .then(numX10 => `O número gerado foi ${numX10}`)
                                .then(console.log)