//25th code review
let a = [5,3]
for (let i = 0; i < 100; i++){
    if(a[0] >= a[1]){
        a[1] += 2
        console.log(a[1])
    }
}

//26th code review
let c = ["Hello", "World"]
let d = []

for (let i = 0; i < c.length; i++){
    for(let j = 0; j < c[i].length; j++){
        d += c[i][j]
    }
}
console.log(d)

//27th code review alt1

let x = [1, 2, 3, 4, 5]
let y = [2, 4, 5]
let z = []

for (let i = 0; i < x.length; i++){
    let count = 0
    for (let j = 0; j < y.length; j++){
        if(x[i] == y[j]){
            count += 1
        }
    }
    if(count == 0){
        z.push(x[i])
    }
}
console.log(z)

//28th code review
let q = 75

if(q >= 75 && q == 100){
    console.log("is in Quadrant 4")
}
else if(q >= 50 && q <= 74){
    console.log("is in Quadrant 3")
}
else if(q >= 25 && q <= 49){
    console.log("is in Quadrant 2")
}
else if(q <= 24){
    console.log("is in Quadrant 1")
}

//29th code review
let e = [true, true, true, false, false]

let counter = 0
for(i = 0; i < e.length; i++){
    if(e[i] == true){
        counter += 1
    }
}
if(counter >= 3){
    console.log("Thank You")
}
else{
    console.log("Sorry")
}

//30th code review
let f = ""

for(let i = 0; i <= 10; i++){
    f += "x"
    console.log(f)
}