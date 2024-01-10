
//1. User information

const userName = 'codigAdventurer'
const fullName = 'Jhon Doe'
const age = 25
const isStudent = true

//2.Address

const address = {
    street: '123 Main street',
    city: 'Techville',
    state: 'Codingland',
    zipCode: 54321
}

// 3. Hobbies

const hobbies = [
    'Coding',
    'Reading',
    'Gaming'
]

// 4. Generating personalized biography

const personalizedBio = `HI, I'm ${fullName}.
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(', ')}
Follow me for coding adventures!`

// 5 Print thr user profile and biography

console.log(personalizedBio)
