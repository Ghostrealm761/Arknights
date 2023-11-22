//let t1 = "12:45:17AM"
//let t1 = "07:45:17PM"
let t1 = "11:59:59PM"
let a = ""

let time = t1.split(":")
if(time[2][2] === "A"){
    if(time[0] === "12"){
        time[0] = "00"
    }
}
else if(time[2][2] === "P"){
    if(time[0] === "1"){
        time[0] = "13"
    }
    else if(time[0] === "2"){
        time[0] = "14"
    }
    else if(time[0] === "3"){
        time[0] = "15"
    }
    else if(time[0] === "4"){
        time[0] = "16"
    }
    else if(time[0] === "5"){
        time[0] = "17"
    }
    else if(time[0] === "6"){
        time[0] = "18"
    }
    else if(time[0] === "7"){
        time[0] = "19"
    }
    else if(time[0] === "8"){
        time[0] = "20"
    }
    else if(time[0] === "9"){
        time[0] = "21"
    }
    else if(time[0] === "10"){
        time[0] = "22"
    }
    else if(time[0] === "11"){
        time[0] = "23"
    }
}

time[2] = time[2][0] + time[2][1]
hourset = time[0] + ":" + time[1] + ":" + time[2]
console.log(hourset)

