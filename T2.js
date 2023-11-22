//Haley Belen
//InTec 2-B
//Inserting Strings in Arrays and Calling Them Test

let x = 0
for(let i=0; i < 10; i++){
    x = x + 1
    console.log(x)
}

let b = "HELLO"
for(let i=0; i < b.length; i++){
    console.log(b[i])
}

let c = "PEAK"
let d = "CHAINSAW"
let e = "MAN"
for(let i=1; i <= 10; i++){
    if(i == 3){
        console.log(c)
    }
    else if(i == 6){
        console.log(d)
    }
    else if(i == 9){
        console.log(e)
    }
    else{
        console.log(i)
    }
}