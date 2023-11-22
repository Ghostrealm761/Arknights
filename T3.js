//Haley Belen
//InTec 2-B
//All Kinds Of Array Tests

let x = [1, 3, 5, 7, 9]

for(i = 0; i < x.length; i++){
    console.log(x[i])
}

let y = ["chainsaw", "sword", "whip"]

for(i = 0; i < y.length; i++){
    console.log(y[i])
}

let a = ["chainsaw", "sword", "whip", 1, 2, true, [1,4]]

for(i = 0; i < a.length; i++){
    console.log(a[i]);
}

let b = [[1,4], [1,5], [1,6]]

for(i = 0; i < b.length; i++){
    for(j = 0; j < b[i].length; j++){
        console.log(b[i][j]);
    }
}

let c = [1,4, "chainsaw", false, [1,6]]

for(i = 0; i < c.length; i++){
    console.log(typeof c[i]);
}

let d = 1
let e = "chainsaw"
let f = [1, 2, 3]
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)

let g = [1,4, "chainsaw", false, [1,6], 5, 6, 7, 8]

for(i = 0; i < g.length; i++){
    if(typeof g[i] == "number"){
        console.log(g[i])
    }
}



