let a = 1.4
a = Math.round(a)
console.log(a)

let b = Math.floor(Math.random() * 16) + 5
console.log(b)

let c = -101
console.log(Math.abs(c))

let d = "Hello"
console.log(d.length)

let e = "Hello world, it is me"
console.log(e.indexOf("e"))

let f = "Hello world, it is me"
console.log(f.indexOf("e", 5))

let g = "Hello world, it is me"
console.log(g.toUpperCase())

let h = "this is my fruit salad"
h = h.split(" ")
console.log(h)

let i = "this is my fruit salad"
i = i.split("his")
console.log(i)

let l = "this is my fruit salad"
l = l.split(" ")

for(let i = 0; i < l.length; i++){
    l[i] = l[i].split("i")
    console.log(l[i])
}
let j = [0, 1, 5, 7]
let k = ["apple", "banana", "orange", "grape", 3, 6, 9]
console.log(j.sort())
console.log(j.reverse())
console.log(k.sort())