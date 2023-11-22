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

