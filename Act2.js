//Haley Belen
//InTec 2-B
//Odd & Even Random Number Activity

let a = " Hello"
let b = " World"
let even = " is an even number"
let odd = " is an odd number"
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter a random number: ", (range) => {
    for(let i = 0; i < range; i++){
        if(i % 2 == 0){
            if(i % 3 == 0 && i % 5 == 0){
                x = i + even + a + b
            }
            else if(i % 3 == 0){
                x = i + even + a
            }
            else if(i % 5 == 0){
                x = i + even + b
            }
            else{
                x = i + even
            }
            console.log(x)
        }
        else if(i % 2 != 0){
            if(i % 3 == 0 && i % 5 == 0){
                y = i + odd + a + b
            }
            if(i % 3 == 0){
                y = i + odd + a
            }
            if(i % 5 == 0){
                y = i + odd + b
            }
            else{
                y = i + odd
            }
            console.log(y)
        }
    }
    r1.close()
})