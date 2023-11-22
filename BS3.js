//13th code review alt1
let x = ["Hello", "World"]
let a = "it"
let b = "is"
let c = "me"

x.push(a, b, c)
for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
        console.log(x[i][j])
    }
}

//14th code review
let g = 20
let h = 10

console.log("Addition:", g, "+", h, "=", g+h)
console.log("Subtraction:", g, "-", h, "=", g-h)
console.log("Multiplication:", g, "*", h, "=", g*h)
console.log("Division:", g, "/", h, "=", g/h)

//15th code review
let num = 15

if(num % 3 == 0 && num % 5 == 0){
    console.log(num, "is divisible by 3 and 5")
}
else if(num % 3 == 0){
    console.log(num, "is divisible by 3")
}
else if(num % 5 == 0){
    console.log(num, "is divisible by 5")
}

//16th code review alt1
let k = "Philippines"
let l = k.replace(/[aeiou]/gi, '');

for(let i = 0; i < l.length; i++){
    console.log(l[i])
}

//17th code review
let m = "Eutopia"
let n = m.replace(/[tp]/gi, '')

for(let i = 0; i < n.length; i++){
    console.log(n[i])
}

//18th code review alt1
let o = "Mask Of Madness"
let p = o.replace(/[a]/gi, 'o')

for(let i = 0; i < p.length; i++){
    console.log(p[i])
}



