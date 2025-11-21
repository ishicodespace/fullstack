function rollDice() {
    let random = Math.floor(Math.random() * 6 + 1);
    console.log(random);
}

rollDice();

//random number within a range (start,end)
function random(start, end) {
    let total = (end - start)+1;
    return Math.floor((Math.random() * total) + start);
}
console.log(random(1,6))
