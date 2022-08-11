const fs = require('fs')
const path = require('path')


let filenumber = 1

var filePath = `/legendas/legendas_0${filenumber}.srt`
const caminho = path.join(__dirname, filePath)

//Uma forma

const readContent = (_,data) => { 
    
    return new Promise (resolve => {
        resolve(data.toString())

}).then(dataString => console.log(dataString))
}

// const noWordKiller = (dataSplited) => {
//     return dataSplited.map()
// }


const convertString = (_,data) => { 
    
    return new Promise (resolve => {
        const rf1 = data.toString().split(" ")
        const rf2 = rf1.filter(x => !x.includes("0") )
        resolve(rf2)

}).then(dataString => console.log(dataString))
}

//fs.readFile(caminho,{},readContent)

const toRefine = fs.readFile(caminho, {}, convertString )