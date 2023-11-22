let x = []
let a = "hello"
let b = "world"

//assigns the value of a as the first element of the x array. 1st element = index 0
x[0] = a

//you can also assign a new value, not from a variable, to a specific index of an array
x[1] = "it's me"

//pushes the value of b to the array, it is automatically added to the last index of the array
x.push(b)

console.log(x)

const y = [
    ["A", "B"],
    [1, 2],
]

console.log(y[0][1])

console.log(8%6)

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = "";
    for(var i = 0; i < strSplit.length; i++) {
      if(strSplit[i].length > longestWord) {
        longestWord = strSplit[i];
      }
    }
    console.log(longestWord);
}
  findLongestWord("The quick brown fox jumped over the lazy dog");

