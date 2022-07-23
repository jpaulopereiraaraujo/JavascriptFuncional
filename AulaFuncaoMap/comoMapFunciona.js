// Array.prototype.meuMap, passa as propriedades de array para auma função que originalmente n as possuiria

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

//Abaixo é demonstrado o funcionamento de um map
Array.prototype.myMap = function (fn) {
    const mapped = []
    for (let i = 0; i < this.length; i++) {
        const result = fn(this[i], i, this)
        mapped.push(result)
    }
    return mapped
}

const getNome = item => item.nome
const getQtde = item => item.qtde
const getPreco = item => item.preco
const getCaracteristicas = item => item.caracteristicas
const getCor = item => item.caracteristicas.cor
const getTamanho = item => item.caracteristicas.tamanhoCm
const getPeso = item => item.caracteristicas.pesoGramas
const getTotal = item => item.preco * item.qtde

const carrinhoPrint = (fn) => console.log(carrinho.myMap(fn))

carrinhoPrint(getCaracteristicas)