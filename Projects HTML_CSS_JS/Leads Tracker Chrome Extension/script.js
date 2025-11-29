//the key value pair is always stored in string format in local storage
let myLeads = [];
//convert the string to an array
// myLeads = JSON.parse(myLeads);
// console.log(typeof myLeads); //object
//add another lead to the array
// myLeads.push("www.secondlead.com");

//convert the array back to string
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads); //string

const inputEl = document.querySelector("input");
const btn = document.querySelector("#input-btn");
const ulEL = document.querySelector("ul");

//local storage
//localStorage.setItem("myLeads", "www.awesomelead.com");
//the key is "myLeads" and the value is "www.awesomelead.com"
//the key value pair is stored in the browser even after refreshing the page
//localStorage.getItem("myLeads");
//localStorage.clear();
//localStorage.setItem("myLeads", "www.awesomelead.com");
// console.log(localStorage.getItem("myLeads"));

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
     <a href="${leads[i]}" target="_blank"> ${leads[i]}</a>
     </li >`;
  }
  ulEL.innerHTML = listItems;
}

btn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  //clear out the input field after saving
  inputEl.value = "";
  render(myLeads);
});

let delBtn = document.querySelector("#delete-btn");

delBtn.addEventListener("dblclick", function () {
  localStorage.clear(); //clear local storage
  myLeads = []; //clear the array
  ulEL.textContent = ""; //clear DOM or call render(myLeads) cause myLeads is now empty
});

const tabBtn = document.querySelector("#save-tab-btn");

tabBtn.addEventListener("click", function () {
  //grab the url of the current tab
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
     myLeads.push(tabs[0].url);
     localStorage.setItem("myLeads", JSON.stringify(myLeads));
     render(myLeads);
  });


});
