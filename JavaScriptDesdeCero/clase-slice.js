
// slice()

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2))
console.log(animals.slice(2, 4))
console.log(animals.slice(1, 6)) // los parametros representan la posición en el array
console.log(animals.slice(-2)) // los parametros representan la posición en el array de atras hacia adelante
console.log(animals.slice(2, -1))
console.log(animals.slice())