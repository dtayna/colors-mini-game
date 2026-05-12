const colors = ['red', 'blue', 'yellow','green', 'orange', 'pink'];

let selectedCupIndex = null;
let actualOrder = [0, 1, 2, 3, 4, 5];
let currentOrder = [0, 1, 2, 3, 4, 5];

const msg = document.querySelector(".feedback-message h1");
const cups = document.querySelectorAll(".cup"); 


function updateFeedbackMessage(message) {
    msg.textContent = message;
}

function chooseOrder(index){
    actualOrder.sort(()=> Math.random() - 0.5);
}

function chooseInitialOrder(){
    currentOrder.sort(()=> Math.random() - 0.5);
    sortCups();
}

function sortCups(){;
    cups.forEach((cup, index)=>{
        cup.className = `cup ${colors[currentOrder[index]]}`;
    })
    
}

function updateCups(cup1, cup2){
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
        updateCups(selectedCupIndex, index);
        cups[selectedCupIndex].style.border = "none";
        selectedCupIndex = null;
    }
}


function init(){
    chooseOrder();
    chooseInitialOrder();
    updateFeedbackMessage("Encontre a ordem correta!");
}

cups.forEach((cup, index) => {
    cup.addEventListener("click", () => {
        selectCup(index);
    });
});

init();