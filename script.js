const colors = ['red', 'blue', 'yellow','green', 'orange', 'pink'];

let selectedColor = colors[0];
let 

const msg = document.querySelector(".feedback-message");


function updateFeedbackMessage(message) {
    msg.textContent = message;
}

function sortCups(){
    // todo
}

function init(){
    updateFeedbackMessage("Encontre a ordem correta!");
}

init();