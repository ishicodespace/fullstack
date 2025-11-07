let myLeads = ["www.google.com", "www.facebook.com", "www.twitter.com"];
const inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", function () {  
    myLeads.push("www.google.com");
    console.log(myLeads);
})
for(let i=0; i<myLeads.length; i++) {
    console.log(myLeads[i]);
}