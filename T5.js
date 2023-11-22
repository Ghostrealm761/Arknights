//let a = "password"
//let a = "P4$sword"
//let a = "Adm!nUs3r"
let a = ""
let pass = [0,0,0,0]
let b = " characters "
let c = " small letter "
let d = " capital letter "
let e = " number "
let f = " symbol "
let g = "and it is a strong password"
let h = "and it is a weak password"
let cnt = 0

for(let i = 0; i < a.length; i++) {
    cnt++
    let big = false
    let small = false
    let num = false

    if(a[i] == 1 || a[i] >= "A" && a[i] <= "Z"){
        pass[0] += 1
        big = true
    }
    if(a[i] == 1 || a[i] >= "a" && a[i] <= "z"){
        pass[1] += 1
        small = true
    }
    if(a[i] >= "0" && a[i] <= "9"){
        pass[2] += 1
        num = true
    }
    if(big == false && small == false && num == false){
        pass[3] += 1
    }
}
if(cnt >= 8 && pass[0] >= 1 && pass[1] >= 5 && pass[2] >= 1 && pass[3] >= 1){
    console.log(cnt + b + pass[1] + c + pass[0] + d + pass[2] + e + pass[3] + f + g)
}
else {
    console.log(cnt + b + pass[1] + c + pass[0] + d + pass[2] + e + pass[3] + f + h)
}