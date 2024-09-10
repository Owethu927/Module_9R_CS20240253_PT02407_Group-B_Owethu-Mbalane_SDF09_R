//creating an object to store player data//
let player = {
    name: "Owethu",
    chips:145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el") // Created a variable to change the way the massage is asked//
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")//creating an object to store player data//
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": R" + player.chips

//Creating a new function to be able to get random numbers
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

//creating a new fuction that will be called startGame() that will call renderGame//

function startGame() {
    isAlive = true
    let firstCard = getRandomCard() //Changed the number to the get random card//
    let secondCard = getRandomCard()
    sum = firstCard + secondCard // creating an array//
    cards = [firstCard, secondCard]
    renderGame()

} 


// creating the button function//
function renderGame() { // changed the stardGame to renderGame
    cardsEl.textContent = "Cards: "
    for (let i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " " //added a loop to space out the numbers//
    }
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message ="Do you want to draw a new card?"
    } else if (sum === 21) {
        message ="You've got Blackjack!"
        hasBlackJack = true
    } else {
        message ="You're out of the game"
        isAlive = false
    }

    messageEl.textContent = message
}

// Creating a second function for the second button//
function newCard() {
   
    //added some restictions to only trigger new card//
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
    sum += card
    cards.push(card) // Added an array to the new card //
    renderGame()
}

    }

    


