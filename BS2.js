//7th code review
num = 2
for (i = 1; i <= 10; i++){
    let pro = num * i
    console.log(pro)
}

//8th code review
let arr = ["Chainsaw Man", 100, true, []]
for (i = 0; i < arr.length; i++){
    console.log(typeof arr[i])
}

//9th code review
let a = [[1,2], [3,4], [5,6]]
for (i = 0; i < a.length; i++){
    for (j = 0; j < a[i].length; j++){
        console.log(a[i][j])
    }
}

//10th code review
let b = [1,2,3,4,5]
for (i = 0; i < b.length; i++){
    let sum = 2 + b[i]
    console.log(sum)
}

//11th code review
let c = ["Hello", "World"]
for (i = 0; i < c.length; i++){
    for (j = 0; j < c[i].length; j++){
        console.log(c[i][j])
    }
}

//12th code review
let d = ["Hello", "World"]
let e = ["Happy", "Birthday"]

for (i = 0; i < d.length; i++){
    d[i] = e[i]
}
console.log(d)

