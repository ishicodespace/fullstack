//hoppscotch or postman can be used to test api endpoints
//json - javascript object notation
//json is not a javascript object, it is a string using javascript object notation 
//json data is always in string format
let data = ` {
    "id": "c76a2922-ba4c-4278-baab-44defb631236",
    "name": "Aberto",
    "description": "Opens locked doors"}`;

//converts json string to js object
let obj = JSON.parse(data);
console.log(obj);

//converts js object to json string
let jsonData = JSON.stringify(obj);
console.log(jsonData);

let url = "https://hp-api.onrender.com/api/spells";

//fetch(url) returns a promise
//so we can use .then() to handle the response
//and we can use .catch() to handle errors
fetch(url) //console -> network -> spells -> response
  .then((response) => {
    //now we have the data but we cant read it
    console.log(response);
    //to read the data we need to convert it to json
    //   console.log(response.json()); //converts data to readable format // returns a promise
      response.json().then((readableData) => {
        console.log(readableData[1].name); //now we can read the data
      });
  }) 
  .catch((error) => {
    console.log(error);
  });

  