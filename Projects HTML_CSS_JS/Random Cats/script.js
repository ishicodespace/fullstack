let button = document.querySelector("button");
let title = document.querySelector("h1");
let p = document.createElement("p");
let img = document.createElement("img");
img.classList.add("catImage");

let url = "https://api.thecatapi.com/v1/images/search";
let getCatImage = async () => {
  try {
    let response = await fetch(url);
    let data = await response.json();

    let imgUrl = data[0].url;
    img.src = imgUrl;
    //wait for image to load fully before displaying fact
    await new Promise((resolve) => {
      img.onload = resolve;
    });

    //add image below button
    button.after(img);
  } catch (e) {
    console.log(e);
  }
};

let getCatFact = async () => {
  try {
    let response = await fetch("https://catfact.ninja/fact?max_length=140");
    let data = await response.json();

    p.innerText = data.fact;

    //add fact below image
    img.after(p);
  } catch (e) {
    console.log(e);
  }
};

button.addEventListener("click", async () => {
  await getCatImage();
  await getCatFact();
});
