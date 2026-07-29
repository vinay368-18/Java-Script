let a = String(6)
console.log(a, typeof a)

let b = Number("10")
console.log(b, typeof (b))

b = Boolean(2)
console.log(b, typeof (b))

b = Boolean(0)
console.log(b, typeof (b))

b = Number("123 Vinay")
console.log(b, typeof (b))
b = parseInt("123 vinay")
console.log(b, typeof (b))




console.log("Type Coversion")
//Type Coversion
let s1 = "8"
let s2 = 2
s1 = s1 + s2
console.log(s1, typeof (s1)) // converted to string
s1 = "8"
s2 = 2
s1 = s1 - s2
console.log(s1, typeof (s1)) // converted to number



