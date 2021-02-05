
function disCliamer() {
    alert("Please be sure to cast your vote for the next president");
}

function changeGeorge(){
    document.getElementById("bGeorge").innerHTML = "Nixon";
}

function removeGeorge() {
    this.removeEventListener("click", changeGeorge);
}

let nixon = document.getElementById("nixon");

nixon.addEventListener("mouseover", function(){
    nixon.src ="fNixon.png"
})
nixon.addEventListener("mouseout", function(){
    nixon.src = "nixonfc.png"
})

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

let contentMenu = document.getElementById("contentMenu");

contentMenu.addEventListener('contextmenu', tempElem => {
    alert("Yup that's an American Flag");
})