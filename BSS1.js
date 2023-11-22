//13th code review alt2
let y = ["Hello", "World"]
let a = "it"
let b = "is"
let c = "me"

y.push(a, b, c)
console.log(y)

//16th code review alt2
let d = "Philippines"
let e = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]

for(let i = 0; i < d.length; i++){
    let unique = true
    for(let j = 0; j < e.length; j++){
        if(d[i] == e[j]){
            unique = false
        }
    }
    if(unique == true){
        console.log(d[i])
    }
}

//17th code review alt2
let f = "Eutopia"
let g = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]

for(let i = 0; i < f.length; i++){
    for(let j = 0; j < g.length; j++){
        if(f[i] == g[j]){
            console.log(f[i])
        }
    }
}

//18th code review alt2
let h = "Mask Of Madness"
let k = ""

for(let i = 0; i < h.length; i++){
    if(h[i] != "a"){
        k += h[i]
    }
    else{
        k += "o"
    }
}
console.log(k)

//27th code review alt2
let l = [1,2,3,4,5]
let m = [2,4,5]

for(let i = 0; i < l.length; i++){
    let unique = true
    for(let j = 0; j < m.length; j++){
        if(l[i] == m[j]){
            unique = false
        }
    }
    if(unique == true){
        console.log(l[i])
    }
}

