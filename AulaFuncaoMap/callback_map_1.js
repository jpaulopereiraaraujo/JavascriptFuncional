const nums = [1,2,3,4,5]
const dobro = (number, index, array) => number*2 + index + array.length

console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']

const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)

console.log(nomes, letras)

//Agora segunda letra

const segundaLetra = nomes.map((nomes)=>(nomes[1]))


//Novamente segunda letra
function imprimeSegundaLetra(){
    const newLetras = nomes.map((nomes)=>(nomes[1]))
    return console.log(newLetras)
}

console.log(segundaLetra)
imprimeSegundaLetra()