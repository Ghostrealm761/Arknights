//Haley Belen
//InTec 2-B
//Calculator Test

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter first number:', (number1) => {
    number1 = parseInt(number1)
    console.log(number1)
    r1.question('Enter your second number:', (number2) => {
        number2 = parseInt(number2)
        console.log(number2)
        r1.question('Enter a number between the following:', '1. Addition', '2. Subtraction', '3. Multiplication', '4. Division', (number3) => {
            number3 = parseInt(number3)
            console.log(number3)
            if(number3 == "1"){
                let sum = number1 + number2
                console.log(sum)
            }
            else if(number3 == "2"){
                let difference = number1 - number2
                console.log(difference)
            }
            else if(number3 == "3"){
                let product = number1 + number2
                console.log(product)
            }
            else if(number3 == "4"){
                let quotient = number1 / number2
                console.log(quotient)
            }
            r1.close()
        })
    })
})
