//

const somarNoTerminal = (num1, num2) => console.log(num1 + num2)
const subtrairNoTerminal = (num1, num2) => console.log(num1 - num2)

const exec = (fn, num1, num2) => fn(num1,num2)




exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)