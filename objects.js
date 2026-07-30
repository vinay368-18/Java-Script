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