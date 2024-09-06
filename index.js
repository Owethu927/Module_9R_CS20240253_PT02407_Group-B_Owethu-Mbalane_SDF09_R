// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el") // Created a variable to change the way the massage is asked//
console.log(messageEl)

let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


// creating the button function//
function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + "" + secondCard
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



