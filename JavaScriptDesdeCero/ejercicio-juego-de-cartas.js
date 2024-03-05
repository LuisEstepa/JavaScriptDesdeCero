// Exercise: Card Game Implementation
const ncards = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
//const deck = ['♠︎','♣︎','♥︎','♦︎']
const pinta = ['♠︎','♣︎','♥︎','♦︎']

const baraja = []

function armarBaraja(){
    ncards.forEach(element => {
        baraja.push(`${element}${pinta[0]}`)
        baraja.push(`${element}${pinta[1]}`);
        baraja.push(`${element}${pinta[2]}`);
        baraja.push(`${element}${pinta[3]}`)
    });
}

armarBaraja()
console.log(baraja)

const deck = baraja

// Fisher-Yates Algorithm
function shuffleDeck () {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]
  }
}

function dealCards (numCard) {
  const dealCards = deck.splice(0, numCard)
  return dealCards
}

function dealFlop () {
    const dealCards = deck.splice(0, 3)
    return dealCards
  }

shuffleDeck()

const player1Hand = dealCards(2)
const player2Hand = dealCards(2)
const player3Hand = dealCards(2)
const flop = dealFlop()

console.log('Player 1 Hand: ', player1Hand)
console.log('Player 2 Hand: ', player2Hand)
console.log('Player 3 Hand: ', player3Hand)
console.log('Flop: ', flop)