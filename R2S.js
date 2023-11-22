function receiveVal(a, b){
    area = 1/2 * base * height
    return area
}

let base = 20
let height = 15

let result = receiveVal(base, height)
console.log("Formula of an area of a triangle:")
console.log("1/2 * base * height")
console.log("1/2 *", base, "*", height, "equals to")
console.log(result)

function findLongest(word){
    let find = word.split(" ")
    cnt = 0

    for(let i = 0; i < find.length; i++){
        if(find[i] > cnt){
            cnt = find[i].length
        }
        return cnt
    }
}

let sentence = "This superhero is a dazzling magnificence"
let result2 = findLongest(sentence)
console.log(result2)