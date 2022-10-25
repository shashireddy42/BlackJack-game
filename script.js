
let firstcard=getrandomcard()
let secondcard=getrandomcard()

let Cards=[firstcard,secondcard]
let sum= firstcard+secondcard
let isalive=true
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let CardsEl=document.getElementById("cards-el")
let creditsEl=document.getElementById("mycredits")
let creator={
  name:"Shashidhar's Game",
}
creditsEl.textContent=creator.name
function getrandomcard(){
  let randomnumber=Math.floor(Math.random()*13)+1
  if(randomnumber>10){
    return 10
  }else if(randomnumber===1){
    return 11
  }else{
    return randomnumber
  }

}
function rendergame(){ 
  CardsEl.textContent="Cards: "
  for(let i=0;i<Cards.length;i++){
    CardsEl.textContent+=Cards[i]+" "
  }
    sumEl.textContent="Sum:"+sum
  
if(sum<21){
  message=("Do you want to draw the new card?")
}
else if(sum===21){
  message=("Yoo bro you won the game ")
}
else{
  message=("Better luck next time brother")
  isalive=false
}
messageEl.textContent=message
}
function startgame(){
  rendergame()
}
function newcard(){
  console.log("New card is created")
  card=getrandomcard()
  Cards.push(card)
  sum+=card
  rendergame()

}