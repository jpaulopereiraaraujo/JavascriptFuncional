Array.prototype.meuFilter = function(fn) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(fn(this[i], i, this)) {
            newArray.push(this[i])
        }
    }

    return newArray
}

const carrinho = [
    { 
    nome: 'Caneta', 
    qtde: 10, 
    preco: 7.99,
    caracteristicas: {
        cor : 'preta',
        tamanhoCm: 5,
        pesoGramas: 50, 
    } },

    { 
    nome: 'Impressora', 
    qtde: 0, 
    preco: 649.50, 
    caracteristicas: {
        cor : 'branca',
        tamanhoCm: 50,
        pesoGramas: 1200, 
    } },

    { 
    nome: 'Caderno', 
    qtde: 4, 
    preco: 27.10,
    caracteristicas: {
        cor : 'verde e roxo',
        tamanhoCm: 20,
        pesoGramas: 700, 
    } },

    { 
    nome: 'Lapis',
    qtde: 3,
    preco: 5.82,
    caracteristicas: {
        cor : 'vermelho',
        tamanhoCm: 5,
        pesoGramas: 800, 
    } },

    { 
    nome: 'Tesoura', 
    qtde: 1, 
    preco: 19.20, 
    caracteristicas: {
        cor : 'verde',
        tamanhoCm: 5,
        pesoGramas: 50, 
    } },
]

const qtdeMaiorQueZero = item => item.qtde > 3

const getNome = item => item.nome

const carrinhoNomeFilter = (fn) => (console.log(carrinho.meuFilter(fn).map(getNome)))

carrinhoNomeFilter(qtdeMaiorQueZero)