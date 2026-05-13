const colors = ['red', 'blue', 'yellow','green', 'orange', 'pink'];

let selectedCupIndex = null;
let actualOrder = [...colors];
let currentOrder = [...colors];

const feedbackMessage = document.querySelector(".feedback-message h1");
const cups = document.querySelectorAll(".cup"); 

function updateFeedbackMessage(message) {
    feedbackMessage.textContent = message;
}

function setActualOrder(index){
    actualOrder.sort(()=> Math.random() - 0.5);
}

function setInitialOrder(){
    currentOrder.sort(()=> Math.random() - 0.5);
    sortCups();
}

function sortCups(){;
    cups.forEach((cup, index)=>{
        cup.className = `cup ${currentOrder[index]}`;
    })
    
}

function updateCurrentOrder(cup1, cup2){
    const temp = currentOrder[cup1];
    currentOrder[cup1] = currentOrder[cup2];
    currentOrder[cup2] = temp;
    sortCups();
    analiseUpdate();
}

function analiseUpdate(){
    let count = 0;
    currentOrder.forEach((color, index)=>{
        if(color === actualOrder[index]){
            count++;
        }
    })

    if (count === colors.length){
        updateFeedbackMessage("Achou a ordem correta!");
    } else {
        updateFeedbackMessage(`${count} acertos`);
    }
}


function selectCup(index) {
    if (selectedCupIndex === null) {
        selectedCupIndex = index;
        cups[index].style.border = "4px solid white";
        return;
    }

    if (selectedCupIndex !== index) {
        updateCurrentOrder(selectedCupIndex, index);
        cups[selectedCupIndex].style.border = "none";
        selectedCupIndex = null;
    }
}


function init(){
    setActualOrder();
    setInitialOrder();
    updateFeedbackMessage("Encontre a ordem correta!");
}

cups.forEach((cup, index) => {
    cup.addEventListener("click", () => {
        selectCup(index);
    });
});

init();