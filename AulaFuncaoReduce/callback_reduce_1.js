const carrinhoSimples = [
    {
        nome: 'Caneta', qtde: 10, preco: 7.99,
        },
    
        { 
        nome: 'Impressora', qtde: 0, preco: 649.50, 
        },
    
        { 
        nome: 'Caderno', qtde: 4, preco: 27.10,
        },
    
        { 
        nome: 'Lapis', qtde: 3, preco: 5.82,
        },
    
        { 
        nome: 'Tesoura', qtde: 1, preco: 19.20, 
        },
   
]
//Onde acc é o acumulador, que sera somado com o elemento el, e em seguida realiza a soma
const getTotal = item => item.qtde*item.preco
console.log("=============================")
const somar = (acc, el) => {
        
        console.log(acc, el)
        return acc + el
        
}
console.log("=============================")
const totais = carrinhoSimples.map(getTotal)

const totalGeral = totais.reduce(somar, 00)
console.log("=============================")
console.log(totais)
console.log("=============================")
console.log(totalGeral)
console.log("=============================")