

//This Will alert the user when onload
function disCliamer() {
    alert("Please be sure to cast your vote for the next president");
}
document.getElementById("load").onload = disCliamer();

//===========================================================================//

//This changes the name on the button

function changeGeorge(){
    document.getElementById("bGeorge").innerHTML = "Nixon";
}
function removeGeorge() {
    this.removeEventListener("click", changeGeorge);
}

//============================================================================//

//The image of Nixon will change when you hover over it

let nixon = document.getElementById("nixon");

nixon.addEventListener("mouseover", function(){
    nixon.src ="fNixon.png"
})
nixon.addEventListener("mouseout", function(){
    nixon.src = "nixonfc.png"
})

//===================================================//

//Soccer Field with a USA polandball and the Country's Election result as the  cursor

field.onclick = function (event) {
    let fieldCord = this.getBoundingClientRect();

    let ballCord = {
        top: event.clientY - fieldCord.top - field.clientTop - ball.clientHeight/2,
        left: event.clientX - fieldCord.left - field.clientTop - ball.clientWidth/2
    }

    if(ballCord.top < 0) ballCord.top = 0
    if(ballCord.left < 0) ballCord.left = 0

    if(ballCord.left + ball.clientWidth > field.clientWidth) ballCord.left = field.clientWidth - ball.clientWidth
    if(ballCord.top + ball.clientHeight > field.clientHeight) ballCord.top = field.clientHeight - ball.clientHeight

    ball.style.left = ballCord.left+'px'
    ball.style.top = ballCord.top+'px'

}
//=============================================================//

//If you inspect on the american flag it will alert you

let contentMenu = document.getElementById("contentMenu");

contentMenu.addEventListener('contextmenu', tempElem => {
    alert("Yup that's an American Flag");
})

//=============================================================//

//If you click Nixon's Button, it will create links to a wiki page about the elections in the footer

let bNixon = document.getElementById("bNixon");
this.bNixon = createNixon();

function createNixon() {
    for(let i = 0; i <= 18; i++){
        let newNixon = document.createElement("a");
        newNixon.textContent = "Election Results";
        newNixon.href = "https://en.wikipedia.org/wiki/1972_United_States_presidential_election#:~:text=The%201972%20United%20States%20presidential,George%20McGovern%20of%20South%20Dakota";
        results.appendChild(newNixon);
    }
}

