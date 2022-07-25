const carrinhoSimples = [
    {
        nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true,
        },
    
        { 
        nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true,
        },
    
        { 
        nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false,
        },
    
        { 
        nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false,
        },
    
        { 
        nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true,
        },
   
]

const isFragil = item => item.fragil
const valorTotal = item => item.qtde*item.preco
const somar = (acc, el) => acc + el
const media = (list, fnFilter) => {
    
    const fragilGeral= list.filter(fnFilter).map(valorTotal)
    const somaGeral = fragilGeral.reduce(somar)
    const media = somaGeral/fragilGeral.length
    return console.log(media)
}
console.log("=============================")
console.log("=============================")
media(carrinhoSimples, isFragil)
console.log("=============================")











// 1. fragil: true
// 2 qtde: 4, preco: 27.10 -> total
// 3 media totais
