const worksOrNot = (valor, chanceErro) => {

    return new Promise((resolve, reject)=> {
        con.log('temp')
        try {
            if (Math.random() < chanceErro) {
                        reject('Ocorreu um erro!')
                    }else{
                        resolve(valor)
                    }

        } catch(e){ 
            reject(e)
        }

        
        
    })
}

// .catch trata o erro, sem esse tratamento a aplicação quebra
worksOrNot('Testando',0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        //Erro tratado especificamente
        err => console.log(`Erro consol: ${err}`)
        )
    .then(() => console.log('Quase fim !'))
    .catch(err => console.log(`Erro : ${err}`))
    .then(()=> console.log('Fim !'))
