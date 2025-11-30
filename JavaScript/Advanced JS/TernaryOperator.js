//conditon ? expression : expression
let age = 20;
const canVote = (age > 18) ? "yes you can vote" : "no you cannot vote";
console.log(canVote); // Output: yes you can vote

// Nested Ternary Operator
let score = 85;
const grade = (score >= 90) ? "A" :
              (score >= 80) ? "B" :
              (score >= 70) ? "C" :
              (score >= 60) ? "D" : "F";
console.log(grade); // Output: B

let exerciseTime = 40;
let message = (exerciseTime < 30) ? "TRY HARDER" : (exerciseTime < 60) ? "DOING GOOD" : "EXCELLENT";
console.log(message)