class Produto {

    constructor(nome, preco, desc = 0.15) {
        this._nome = nome
        this.preco = preco
        this.desc = desc
    }
    get preco() {
        return this._preco
    }

    set preco(novoPreco){
        if(novoPreco > 0) {
            this._preco = novoPreco
        }
    }

    precoFinal() {
        return this.preco*(1 - this.desc)
    }

    get nome() {
        return `Nome do produto : ${this._nome}`
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }
}

const p1 = new Produto ('Torradeira', 100.50)
p1.nome = 'torradeira'
console.log(p1.nome)
console.log(p1.preco)
const p2 = new Produto ('Geladeira', 10000, 0.8)
console.log(p2.preco)
console.log(p2.precoFinal())
console.log(p2.precoFinal())