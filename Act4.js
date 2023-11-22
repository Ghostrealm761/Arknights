let botChoice = ""

function RPS(){
    let botChoice = Math.floor(Math.random() * 3)
    for(let i = 0; i < ogWeapon.length; i++){
        botWp = ogWeapon[botChoice]
    }
    return botWp
}

let ogWeapon = ["rock", "paper", "scissors"]
let result = RPS(ogWeapon)

console.log("Begin Rock Paper Scissors")

let userChoice = ["rock", "paper", "scissors", "rock", "rock"]
let userScore = 0
let botScore = 0
let tieScore = 0

for(let k = 0; k < userChoice.length; k++){
    let userWp = userChoice[k]
    let fight = RPS()

    if(userWp === fight){
        console.log("User and bot uses:", userWp,"and", fight)
        console.log("It's a tie")
        tieScore++
    }
    else if(userWp === "rock" && fight === "scissors"){
        console.log("User and bot uses:", userWp,"and", fight)
        console.log("You win")
        userScore++
    }
    else if(userWp === "paper" && fight === "rock"){
        console.log("User and bot uses:", userWp,"and", fight)
        console.log("You win")
        userScore++
    }
    else if(userWp === "scissors" && fight === "paper"){
        console.log("User and bot uses:", userWp,"and", fight)
        console.log("You win")
        userScore++
    }
    else if(fight === "rock" &&  userWp === "scissors"){
        console.log("User and bot uses:", userWp,"and", fight)
        console.log("You lose")
        botScore++
    }
    else if(fight === "paper" && userWp === "rock"){
        console.log("User and bot uses:", userWp,"and", fight)
        console.log("You lose")
        botScore++
    }
    else if(fight === "scissors" && userWp === "paper"){
        console.log("User and bot uses:", userWp,"and", fight)
        console.log("You lose")
        botScore++
    }
}

console.log("Loading..")
console.log("Win Record of User")
console.log("Win:", userScore)
console.log("Lose:", botScore)
console.log("Tie:", tieScore)
console.log("Loading...")

if(userScore > botScore){
    console.log("User won with", userScore, "points")
}
else if(userScore < botScore){
    console.log("Robot won with", botScore, "points")
}
else if(userScore == botScore){
    console.log("Draw! Both have", userScore, "points")
}


