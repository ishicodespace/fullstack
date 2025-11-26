let url = "https://api.thecatapi.com/v1/images/search";
let img = document.querySelector("#catImage");
fetch(url)
  .then((response) => {
    console.log(response);
     response.json().then((readableData) => {
      img.src = readableData[0].url;
    });
  })
  .catch((error) => {
    console.log(error);
  });

  let fact=document.querySelector("#catFact");
  let url2 = "https://catfact.ninja/fact?max_length=140";
  fetch(url2)
    .then((response) => {
      console.log(response);
      response.json().then((readableData) => {
          fact.innerText=readableData.fact;
      });
    })
    .catch((error) => {
      console.log(error);
    });