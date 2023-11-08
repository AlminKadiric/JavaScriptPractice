let firstCard = 10;
let secondCard=4;
let hasBlackJack = false;
let isAlive = true;
let cards = [firstCard,secondCard];

let sum = firstCard + secondCard;
let messageEl=document.getElementById("message-el");

let sumEL = document.querySelector("#sum-el");

let cardsEl = document.getElementById("cards-el");
//blackjack

function startGame(){
    renderGame();
}

function renderGame(){
    cardsEl.textContent =  "Cards: " + cards[0] + " " + cards[1];
    sumEL.textContent = "Sum:" + sum;
if(sum <= 20){
    message="Do you want to draw a new card!";

}else if(sum===21){
    message="You've got the Blackjack!";
    hasBlackJack = true;
}else{
   message="You are out of the game!!!";

isAlive=false;
}
messageEl.textContent=message;
}
function newCard(){
    let card =7;
    sum+=card;
    renderGame();




}
