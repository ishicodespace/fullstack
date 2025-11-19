//get the count-el element then store it in a countEl variable
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count = count + 1;
    //set countEl's innerText to the count
    countEl.innerText = count;
}

let saveEl = document.getElementById("save-el");

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}




