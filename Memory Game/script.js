let unosIme= document.getElementById("ime");
let forma = document.querySelector('form');
let sveKarte = document.querySelectorAll('.kartica');
let hasFlipedCard = false;
let firstCard, secondCard;
let lockTable = false;
let time = document.getElementById('time')
let timeSec = parseInt(time.textContent)
let board = document.querySelector('.table')
let timerBegan = false;

let numberOfMatched = 0;


forma.addEventListener("submit", event =>{
    event.preventDefault ();
    if(unosIme.value == null || unosIme.value == ""){
        alert("Ime mora biti uneto")
    }
    else{
        sveKarte.forEach(elem => {
            elem.classList.remove('pokaziKartu')
        })
        localStorage.setItem("username",JSON.stringify( unosIme.value));
     let radioChecked = document.querySelector("input[name='tezina']:checked");
     let radioCheckedValue = radioChecked.value;
     (function shuffle() {
        sveKarte.forEach(karta => {
            let randomPos =Math.floor(Math.random() * parseInt(radioCheckedValue));
            karta.style.order = randomPos;
        });
    })();

    sveKarte.forEach(karte => {
            karte.addEventListener('click', flip)
        }) 
     for(let i=0; i < parseInt(radioCheckedValue); i++){
        sveKarte[i].classList.add('pokaziKartu');
        if(parseInt(radioCheckedValue) == 16){
            board.classList.add('board-width');
        board.style.gridTemplateColumns="auto auto auto auto";
        board.style.gridTemplateRows="auto auto auto auto";
        sveKarte.forEach(card => {
            card.style.width = "70%";
            card.style.margin = "15px";
        })
        }else if(parseInt(radioCheckedValue) == 36){
            board.classList.add('board-width');
            board.style.gridTemplateRows="auto auto auto auto auto auto" ;
            board.style.gridTemplateColumns="auto auto auto auto auto auto";
           
            sveKarte.forEach(card => {
                card.style.width = "90%";
                card.style.margin = "3px";
            })
    } else if(parseInt(radioCheckedValue) == 64){
        board.classList.add('board-width');
        board.style.gridTemplateColumns="auto auto auto auto auto auto auto auto";
        board.style.gridTemplateRows="auto auto auto auto auto auto auto auto";

        sveKarte.forEach(card => {
            card.width = "90%";
            card.style.margin = "3px";

        })
        
    } else if(parseInt(radioCheckedValue) == 100){
        board.classList.add('board-width');
        board.style.gridTemplateColumns="auto auto auto auto auto auto auto auto auto auto";
        board.style.gridTemplateRows="auto auto auto auto auto auto auto auto auto auto"
        sveKarte.forEach(card => {
            card.style.width = "90%";
            card.style.margin = "3px";

        })
    }
}
}
});
    


sveKarte.forEach(karta => {
    karta.addEventListener('click', flip);
})


function flip() {
    if(!timerBegan){
        console.log(startTimer);
        startTimer();
    }
    if (lockTable) return; 
    this.classList.add('flip');
    if (this === firstCard) return;
    if (!hasFlipedCard){
        hasFlipedCard = true;
        firstCard = this;
        firstCardValue = this.getAttribute('value');
        
        return;
        
    }else {
        hasFlipedCard = false;
        secondCard = this;
        secondCardValue = this.getAttribute('value');
        console.log(secondCardValue)
        checkpair()  
    
   }
}

function startTimer(){
    console.log("start timer");
    window.setInterval(function(){
        console.log(timeSec);
        timeSec++;
        time.innerText = timeSec;
    }, 1000);
    timerBegan = true;
}

function checkpair () {
    if (firstCardValue === secondCardValue){
        disableCard();
    } else {
        flipcards();
   }
}

function disableCard() {
    firstCard.removeEventListener('click', flip);
        secondCard.removeEventListener('click', flip);
        resetBoard();
}

function flipcards() {
    lockTable = true;
    setTimeout(() => { 
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockTable = false;
        resetBoard();
    },700)
    console.log('funkcija uradjena')
}
 function resetBoard() {
  [hasFlipedCard, lockTable] = [false, false];
  [firstCard, secondCardValue] = [null, null];
 }
 
//  flip.addEventListener('click', () => {
//      cardFliped= false
//      matched = [];
//      timeSec = 0;
//  })









