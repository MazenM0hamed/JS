let homeBoardEl = document.getElementById("home-board-el")
let guestBoardEl = document.getElementById("guest-board-el")
let homeCounter = 0 
let guestCounter = 0


function homeScoreIncrement(){
    homeCounter = homeCounter +1
    homeBoardEl.textContent = homeCounter;
}

function homePlusTwoScoreIncrement(){
   homeCounter = homeCounter + 2
    homeBoardEl.textContent = homeCounter;
}

function homePlusThreeScoreIncrement(){
    homeCounter = homeCounter + 3
    homeBoardEl.textContent = homeCounter;
}

function guestScoreIncrement(){
   guestCounter = guestCounter +1
    guestBoardEl.textContent = guestCounter;
}

function guestPlusTwoScoreIncrement(){
    guestCounter = guestCounter + 2
    guestBoardEl.textContent = guestCounter;
}

function guestPlusThreeScoreIncrement(){
    guestCounter = guestCounter + 3
    guestBoardEl.textContent = guestCounter;
}

function newGame(){
    homeCounter = 0
    guestCounter = 0
    homeBoardEl.textContent = homeCounter;
    guestBoardEl.textContent = guestCounter;
}