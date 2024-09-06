// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = getRandomCard() //Changed the number to the get random card//
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el") // Created a variable to change the way the massage is asked//
console.log(messageEl)

// creating an array//
let cards = [firstCard, secondCard]

let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//creating a new fuction that will be called startGame() that will call renderGame//

function startGame() {
    renderGame()
} 

//Creating a new function to be able to get random numbers
function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber >10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// creating the button function//
function renderGame() { // changed the stardGame to renderGame

    for (let i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " " //added a loop to space out the numbers//
    }
    sumEl.textContent = "Sum" + sum
    if (sum < 21) {
        message ="Do you want to draw a new card?"
    } else if (sum === 21) {
        massage ="You've got Blackjack!"
        hasBlackJack = true
    } else{
        message ="You're out of the game"
        isAlive = false
    }
    
    messageEl.textContent = message
}

// Creating a second function for the second button//
function newCard() {
    console.log("Draw a new card from the deck!")
  
    //added some restictions to only trigger new card//
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
    sum += card
    cards.push(card) // Added an array to the new card //
    startGame()
}

    }

    


