// let atags = document.querySelectorAll('div a');
// for (let i = 0; i, atags.length; i++){
//     atags[i].style.color="yellow"
// }

//create p then append to document
let para = document.createElement('p');
para.innerText = "Hey I am red";

document.querySelector('body').append(para);
para.classList.add("red"); //from css file

//create h3 then append to document
let h3 = document.createElement("h3");
h3.innerText = "Hey I am blue";

h3.style.color = "blue"; //inline styling using style object
document.querySelector("body").append(h3);

//create a div then insert to document
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "Hey I am in div";
para2.innerText = "me too";

div.append(h1);
div.append(para2);

div.classList.add("box"); //from css file
document.querySelector("body").append(div); //append only div cause h1 and p are already appended in div



