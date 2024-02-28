function PowerpufflGirl(name, color, superpower){
    this.name = name
    this.color = color
    this.superpower = superpower
    this.isLeader = false
    this.displyInfo = function(name){
        console.log(`I'm ${name} soy de color ${color} y mi super poder es ${superpower}`)
    }
}

const bloosson = new PowerpufflGirl('Bloosson', 'red', 'Ice Breath' )
const bombon = new PowerpufflGirl('Bombon', 'Green', 'Super Strength' )
const bubbles = new PowerpufflGirl('Bubbles', 'Blue', 'Fligth' )

PowerpufflGirl()