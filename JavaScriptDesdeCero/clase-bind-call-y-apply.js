const owner = "Luis"
const address = "123 avenue"

function dogGreeting(owner , address){
    console.log(`Hello I'm ${this.dogName} and I live with my owner ${owner} in ${address} since near to 5 years ago`)
}

const newHouse = {
    dogName : "Toby"
}

dogGreeting.call(newHouse, owner, address)

const necessaryValues = [owner, address]

dogGreeting.apply(newHouse, necessaryValues)

const bindingWithBind = dogGreeting.bind(newHouse, owner, address)

bindingWithBind()