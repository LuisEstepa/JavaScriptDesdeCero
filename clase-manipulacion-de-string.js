const saludo = 'Hola. ¿Cómo estas?';

console.log(saludo[2]) // devuelve el caracter que se encuentra en esa posición del array
console.log(saludo.charAt) // devuelve el caracter que se encuentra en esa posición del array
console.log(saludo.indexOf('o')) // devuelve la posicion del caracter en el array 
console.log(saludo.indexOf('Cómo')) // devuelve la pocicion de conde inicia la palabra
console.log(saludo.indexOf('como')) // devuelve en boleano el resultado de la pregunta si existe el parametro string
console.log(saludo.lastIndexOf('o')) //devuelve la posicion del caracter en el array buscando del final hacia el inicio
console.log(saludo.slice(3, 5)) // devuelve el contenido intermedio dentro de estas posiciones
console.log(saludo.length) // devuelve el tamaño del string
console.log(saludo.toLocaleLowerCase()) // devuelve el string en minusculas
console.log(saludo.toLocaleUpperCase()) // devuelve el string en mayusculas

 
const saludoDividido = saludo.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])

const saludoDos = 'Hola mundo'
