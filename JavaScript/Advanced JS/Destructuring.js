//destructuring of arrays
const colors = ["Red", "Green", "Blue", "Yellow"];
const[first,second]=colors;
//[index]=array name
console.log(`First Color: ${first}`);
console.log(`Second Color: ${second}`);


//destructuring of objects
const favFilm = {
  title: "Inception",
  year: "2010",
  genre: "Science Fiction",
  director: "Christopher Nolan",
};

const { title, year} = favFilm;
//{object property}=object name

console.log(`Title: ${title}`);
console.log(`Year: ${year}`);

