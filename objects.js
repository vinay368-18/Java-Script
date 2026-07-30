let alien = {
    name: 'vinay',
    dept: 'CSE',
    laptop: {
        brand: 'dell',
        price: 70000
    }
}
console.log(alien)
console.log(typeof (alien))
console.log(alien.name)
console.log(alien['dept'])

let input = 'name'
console.log(alien[input])

console.log(alien.laptop)
console.log("Keys using for in loop")
for (let key in alien)
    console.log(key)

delete alien.laptop

console.log(alien)

