function counter(name, cnt){
    if(cnt > 6){
        cnt -= 6
    }
    flames(name, cnt)
}

function flames(name, cnt){
    if(cnt <= 6){
        if(cnt == 0){
            console.log(name, cnt, "None")
        }
        if(cnt == 1){
            console.log(name, cnt, "Friends")
        }
        if(cnt == 2){
            console.log(name, cnt, "Lovers")
        }
        if(cnt == 3){
            console.log(name, cnt, "Affectionate")
        }
        if(cnt == 4){
            console.log(name, cnt, "Marriage")
        }
        if(cnt == 5){
            console.log(name, cnt, "Enemies")
        }
        if(cnt == 6){
            console.log(name, cnt, "Siblings")
        }
    }
    else{
        counter(name, cnt)
    }
}

let a = "Stephanie"
let b = "Stephieroth"
p1 = a.toLowerCase()
p2 = b.toLowerCase()
let blank = ""
let p1n = 0
let p2n = 0

for(let i = 0; i < p1.length; i++){
    for(let j = 0; j < p2.length; j++){
        let unique = true
        for(let k = 0; k < blank.length; k++){
            if(p1[i] == blank[k]){
                unique = false
            }
        }
        if(unique == true){
            if(p1[i] == p2[j] && p1[i] != " "){
                blank += p2[j]
            }
        }
    }
}


for(let i = 0; i < blank.length; i++){
    for(let j = 0; j < p1.length; j++){
        if(blank[i] == p1[j]){
            p1n += 1
        }
    }
    for(j = 0; j < p2.length; j++){
        if(blank[i] == p2[j]){
            p2n += 1
        }
    }
}

flames(p1, p1n)
flames(p2, p2n)
console.log(p1n+p2n)
flames("Both", p1n + p2n)
