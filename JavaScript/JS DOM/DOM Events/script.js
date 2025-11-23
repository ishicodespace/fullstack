//onclick: when an element is clicked
//we can write js code inside html for that
//<button onclick="console.log("Liked")">Click to like</button>

//or we can use js to add event listener
let btns = document.querySelectorAll("button");

function hello() {
  window.alert("Hello");
}

// for (let i = 0; i < btns.length; i++){
//     btns[i].onclick=hello;
// }


//onmouseenter: when mouse pointer enters the element
for (let i = 0; i < btns.length; i++){
    btns[i].onmouseenter = function () {
        console.log("weeeeeeeeeee"); //prints everytime mouse enters the button
    };
}

//EVENT LISTENERS

//onclick can only have one function assigned to it at a time
// btns[0].onclick = function () {
//   alert("First Function");
// };
// btns[0].onclick = function () {
//   alert("Second Function");
// };
// btns[0].onclick(); //This will only call the second function


//to add multiple event listeners to the same element, we use addEventListener
//addEventListener(event, callbackFunction)
//events can be click, drag, keypress

btns[0].addEventListener("click", function () {
    alert("First Function");
});
btns[0].addEventListener("click", function () {
  alert("Second Function");
});
// btns[0].addEventListener("dblclick", function () {
//   alert("DON'T double click");
// });