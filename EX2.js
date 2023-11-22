console.log("Output:")

function castSkills(skills){
    for(let i = 0; i < skills.length; i++) {
        if(mana > 0){
            if(skills[i] == "QQQR"){
                mana -= 90
                console.log("Cold Snap. Mana used: 90", "Mana left:", mana)
            }
            else if(skills[i] == "QQWR"){
                mana -= 175
                console.log("Ghost Walk. Mana used: 175", "Mana left:", mana)
            }
            else if(skills[i] == "QQER"){
                mana -= 125
                console.log("Ice Wall. Mana used: 125", "Mana left:", mana)
            }
            else if(skills[i] == "WWWR"){
                mana -= 175
                console.log("E.M.P. Mana used: 175", "Mana left:", mana)
            }
            else if(skills[i] == "WWQR"){
                mana -= 140
                console.log("Tornado. Mana used: 140", "Mana left:", mana)
            }
            else if(skills[i] == "WWER"){
                mana -= 90
                console.log("Alacrity. Mana used: 90", "Mana left:", mana)
            }
            else if(skills[i] == "EEER"){
                mana -= 175
                console.log("Sunstrike. Mana used: 175", "Mana left:", mana)
            }
            else if(skills[i] == "EEQR"){
                mana -= 75
                console.log("Forge Spirit. Mana used: 75", "Mana left:", mana)
            }
            else if(skills[i] == "EEWR"){
                mana -= 200
                console.log("Chaos Meteor. Mana used: 200", "Mana left:", mana)
            }
            else if(skills[i] == "QWER"){
                mana -= 250
                console.log("Deafening Blast. Mana used: 250", "Mana left:", mana)
            }
            else{
                console.log("Invalid Combination")
            }
        }
        else{
            console.log("Not Enough Mana")
        }
    }
}

//let skills = ["QQQQ", "QWE", "R", "WWWR", "QQWR"]
//let skills = ["EEQR", "WWER", "QQQR", "QQER", "EEQR"]
//let skills = ["ABC", "123", "DoReMi", "?!@-", "QWER"]
//let skills = ["WWQR", "EEWR", "QWER", "QQQR", "EEER"]
let skills = ["EEER", "EEER", "E", "ERE", "EEER"]
let mana = 500
castSkills(skills)