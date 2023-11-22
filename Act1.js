//Haley Belen
//InTec 2-B
//Calculator Activity


//trigger the readline variable
const readline = require('readline');

//in order to use the output and input variables you need to use this
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//declare the first number variable and parse it as an integer to prevent it from becoming a string
r1.question('Enter first number:', (number1) => {
    number1 = parseInt(number1)
    //this is where you call the operation variable in order to produce the result you wanted
    r1.question('Enter operation:', (opr) => {
        //declare the second number variable and parse it as an integer to prevent it from becoming a string
        r1.question('second number:', (number2) => {
            number2 = parseInt(number2)
            //this is where you build the computation in order to use the necessary operation variables
            if(opr == "+"){
                console.log("You have chosen addition, the sum to your operation is:", number1 + number2)
            }
            if(opr == "-"){
                console.log("You have chosen subtraction, the difference to your operation is:", number1 - number2)
            }
            if(opr == "*"){
                console.log("You have chosen multiplication, the product to your operation is:", number1 * number2)
            }
            if(opr == "/"){
                console.log("You have chosen division, the quotient to your operation is:", number1 / number2)
            }
            //I think this is where you close the computation in order to prevent the unnecessary looping, not sure
            r1.close()
        })
    })
})
