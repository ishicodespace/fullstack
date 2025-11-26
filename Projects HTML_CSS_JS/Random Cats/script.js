let button = document.querySelector("button");
let title = document.querySelector("h1");
let p = document.createElement("p");
let img = document.createElement("img");
img.classList.add("catImage");

let url = "https://api.thecatapi.com/v1/images/search";
let getCatImage = () => {
  fetch(url)
    .then((response) => {
      console.log(response);
      response.json().then((readableData) => {
        let imgUrl = readableData[0].url;
        console.log(imgUrl);
        img.src = imgUrl;
        button.after(img);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

let getCatFact = () => {
  let fact = document.querySelector("#catFact");
  let url2 = "https://catfact.ninja/fact?max_length=140";
  fetch(url2)
    .then((response) => {
      console.log(response);
      response.json().then((readableData) => {
          p.innerText = readableData.fact;
            img.after(p);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

button.addEventListener("click", () => {
  getCatImage();
  getCatFact();
});
