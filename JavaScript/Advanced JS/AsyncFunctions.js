// async keyword declares an asynchronous function, which always returns a promise
//we can then apply methods like .then() and .catch() to handle the resolved value or errors

//this returns a promise that resolves to 10 not 10 directly
//function executed normally->promise fulfilled ->if it has a return value, promise resolved with that value
//if an error is thrown, promise is rejected with that error
async function example() {
  return 10;
}
console.log(example()); //Promise {<resolved>: 10}

//to get the resolved value, we can use await

let examplePromise = async () => {
  console.log(await example()); //using await to get resolved value from promise
};
examplePromise(); //10

//arrow function with async
let greet = async () => {
  return "Greetings!";
};

//when we call greet, it returns a promise
//we can use .then() to handle the resolved value
greet()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
