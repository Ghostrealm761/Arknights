//Haley Belen
//InTec 2-B
//Determining The Repeated Value In The Arrays Test

let x = ["aba", "baba", "aba", "xzxb"]
let y = ["aba", "xzxb", "ab"]
let ctrarr = []

for (i = 0; i < y.length; i++) {
    let count = 0
    for (j = 0; j < x.length; j++) {
        if(y[i] == x[j]) {
            count += 1
        }
    }
    ctrarr[i] = count
}
console.log(ctrarr)

let h = [1, 1, 2, 3, 3, 5, 5, 7, 7, 9, 9]

for(i = 0; i < h.length; i++){
    let counter = 0
    for(j = 0; j < h.length; j++){
        if(h[i] == h[j]){
            counter += 1
        }
    }
    if(counter == 2){
        console.log(h[i])
    }
}
