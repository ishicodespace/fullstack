//try block contains the code that might throw an error
//catch block executes if error occurs

try {
  console.log(a);
} catch (error) {
  console.log("Reference Error");
  console.log(error);
}
console.log("hello");
