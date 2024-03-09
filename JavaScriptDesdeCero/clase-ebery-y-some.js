// Methods that DO NOT modify the original array ( Inmutability).

const ages=[21,25,30,19,22]

//every() -> todos - si se cumple devuelve booleano

const allAreAdults=ages.every(age => age > 20)
console.log(ages)
console.log(allAreAdults)

// some() -> alguno - si se cumple devuelve booleano
const atLeastOneIsOver30=ages.some(age => age > 30)
console.log(ages)
console.log(atLeastOneIsOver30)