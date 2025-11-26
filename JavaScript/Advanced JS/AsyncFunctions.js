// async keyword declares an asynchronous function, which returns a Promise.

async function add(a, b) {
    console.log(a + b); //returns a promise
}

add()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

let greet = async () => {
    console.log("hello");
 };