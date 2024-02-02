
const house = {
    dogName:'Fido',
    dogGreeting: function (){
    console.log(`Hi, I'm ${this.dogName}`)
    }
}

house.dogGreeting()

function dogGreeting (){
    console.log(`Hi, I'm ${this.dogName}`)
    }

const newhouse = {
    dogName:'coco',
    dogAge: 3
}

dogGreeting.call(newhouse)

function newDoggreeting(owner, address){
    console.log(`Hi, I'm ${this.dogName} and I live with mi owner ${owner} in ${address}`)
}

const owner =   'Luis'
const address = 'calle 123'

function newDoggreeting(owner, address){
    console.log(`Hi, I'm ${this.dogName} and I live with mi owner ${owner} in ${address}`)
}

newDoggreeting.call(newhouse, owner, address)