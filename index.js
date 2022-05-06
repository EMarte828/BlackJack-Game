let cards = [] 
let sum = 0
let userHasBlackJack = false
let userIsAlive = false
let message = ""

let messageElement = document.getElementById("message-el")
let sumElement = document.getElementById("sum-el")
let cardsElement = document.getElementById("cards-el")


let player = //creating an object
{
    name: "Esmeralda",
    chips: 200,
}

let playerElement = document.getElementById("player-el")
playerElement.textContent = player.name + ": $" + player.chips // key.value

function getRandomCard()
{
    let randomNumber =  Math.floor(Math.random() * 13) + 1  
    if (randomNumber > 10)
    {
        return 10
    } else if (randomNumber === 1)
    {
        return 11
    } else {
        return randomNumber
    }    
}

function startGameButton()
{
    userIsAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    restartGame()
}

function restartGame()
{
   
    cardsElement.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++)
    {
        cardsElement.textContent += cards[i] + " "
    }
    
    sumElement.textContent = "Sum: " + sum
    

    if (sum <= 20)
    {
        message = "Would you like to draw a new card?"
    } else if (sum === 21)
    {
        message = "You won! You've scored Blackjack!"
        userHasBlackJack = true
    } else
    {
        message = "You've lost!"
        userIsAlive = false
    }


}

function newCardButton()
{
    if (userIsAlive === true && userHasBlackJack === false)
    {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        restartGame()
    } 
}
