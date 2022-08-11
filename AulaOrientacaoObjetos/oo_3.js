//Funcao Construtora
function Produto(idProduto, nome, preco, desconto = 0.10) {
    //Variavel privada
    let valorPrivado = "Essa frase apenas dentro da funcao"
    //Variaveis publicas
    this.nome = nome
    this.preco = preco
    this.desconto = desconto
    this.idProduto = idProduto

    //funcoes dentro do objeto

    this.getId = () => {
        return console.log(this.idProduto)
    }

    this.getFrase = function() {
        return console.log(this.valorPrivado)
    }

    this.precoFinal = () => {
        return this.preco*(1-desconto)
    }

}

Produto.prototype.log = function () {
    console.log(`Nome ${this.nome} Preco: R$ ${this.preco}`)
}

//Definindo propriedades no objeto
Object.defineProperty(Produto.prototype, 'desc', {
    get: function () {
        return this._desc
    }, 
    set: function (novoDesc) {
        if(novoDesc >= 0 && novoDesc <=1) {
            this._desc = novoDesc
        }
    }
})

Object.defineProperty(Produto.prototype, 'descString', {
    get: function () {
        return `${this._desc * 100}% de desconto`
    }
})


//o this.variavel torna aquele atributo publico, tornando-o acessivel para fora da funcao
//a varivel valorPrivado e apenas utilizada dentro da funcao produto n podendo ser acessada

const p1 = new Produto (12544,'Caneta', 8.59)
const p2 = new Produto (12543, 'Lapis', 2.64)

console.log(p1)

console.log(typeof p1)

console.log(p1.nome)
console.log(p2.preco)
//valorPrivado como n possui o this retorna undefined
console.log(p1.valorPrivado)
console.log(p2.getFrase())
console.log(p1.precoFinal())
p1.log()
p2.desc = 0.99
console.log(p2.desc)
console.log(p2.descString)