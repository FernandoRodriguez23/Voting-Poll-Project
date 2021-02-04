
function disCliamer() {
    alert("Please be sure to cast your vote for the next president");
}

function changeGeorge(){
    document.getElementById("bGeorge").innerHTML = "Nixon";
}


let nixon = document.getElementById("nixon");

nixon.addEventListener("mouseover", function(){
    nixon.src ="fNixon.png"
})
nixon.addEventListener("mouseout", function(){
    nixon.src = "nixonfc.png"
})

