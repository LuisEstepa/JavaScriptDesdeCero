const morseCode1=['....','---']
const morseCode2=['.-..','.-']
const morseCode3=['.--.','-..-']

// conconcat
const morseCodeMessage=morseCode1.concat(morseCode2)
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)
const morseCodeMessage2=[].concat(morseCode1, morseCode2, morseCode3)
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCode3)
console.log(morseCodeMessage2)

// Spread Operator

function combineMorseMessages(morseCode1,morseCode2){
    console.log([...morseCode1,...morseCode2])
}
combineMorseMessages(morseCode1,morseCode2)

const numbers=[1,2,3]
const string='string'

combineMorseMessages(numbers,string)

// join()
const morseCodeMessageString=morseCodeMessage.join('')
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessageString)