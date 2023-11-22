//let a = "Merry Christmas and Happy New Year"
//let a = "The quick brown frog jumps over the dog"
//let a = "Pack my bags with five dozen liquor jugs"
//let a = "The five boxing wizards jump quickly"
let a = "We promptly judged antique ivory buckles for the next prize"
let alphabet = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
for(let i = 0; i < a.length; i++){
    if(a[i] == "A" || a[i] == "a"){
        alphabet[0] += 1
    }
    else if(a[i] == "B" || a[i] == "b"){
        alphabet[1] += 1
    }
    else if(a[i] == "C" || a[i] == "c"){
        alphabet[2] += 1
    }
    else if(a[i] == "D" || a[i] == "d"){
        alphabet[3] += 1
    }
    else if(a[i] == "E" || a[i] == "e"){
        alphabet[4] += 1
    }
    else if(a[i] == "F" || a[i] == "f"){
        alphabet[5] += 1
    }
    else if(a[i] == "G" || a[i] == "g"){
        alphabet[6] += 1
    }
    else if(a[i] == "H" || a[i] == "h"){
        alphabet[7] += 1
    }
    else if(a[i] == "I" || a[i] == "i"){
        alphabet[8] += 1
    }
    else if(a[i] == "J" || a[i] == "j"){
        alphabet[9] += 1
    }
    else if(a[i] == "K" || a[i] == "k"){
        alphabet[10] += 1
    }
    else if(a[i] == "L" || a[i] == "l"){
        alphabet[11] += 1
    }
    else if(a[i] == "M" || a[i] == "m"){
        alphabet[12] += 1
    }
    else if(a[i] == "N" || a[i] == "n"){
        alphabet[13] += 1
    }
    else if(a[i] == "O" || a[i] == "o"){
        alphabet[14] += 1
    }
    else if(a[i] == "P" || a[i] == "p"){
        alphabet[15] += 1
    }
    else if(a[i] == "Q" || a[i] == "q"){
        alphabet[16] += 1
    }
    else if(a[i] == "R" || a[i] == "r"){
        alphabet[17] += 1
    }
    else if(a[i] == "S" || a[i] == "s"){
        alphabet[18] += 1
    }
    else if(a[i] == "T" || a[i] == "t"){
        alphabet[19] += 1
    }
    else if(a[i] == "U" || a[i] == "u"){
        alphabet[20] += 1
    }
    else if(a[i] == "V" || a[i] == "v"){
        alphabet[21] += 1
    }
    else if(a[i] == "W" || a[i] == "w"){
        alphabet[22] += 1
    }
    else if(a[i] == "X" || a[i] == "x"){
        alphabet[23] += 1
    }
    else if(a[i] == "Y" || a[i] == "y"){
        alphabet[24] += 1
    }
    else if(a[i] == "Z" || a[i] == "z"){
        alphabet[25] += 1
    }
}

let unique = true
for(let i = 0; i < alphabet.length; i++){
    if(alphabet[i] == 0){
        unique = false
    }
}
if(unique == true){
    console.log("pangram")
}
else{
    console.log("not pangram")
}


