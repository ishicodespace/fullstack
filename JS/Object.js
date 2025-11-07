let person = {
    name: "Ishika",
    age: 21,
    country: "India"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
}
logData();

console.log("The 3 largest countries in the world")
let largestCountries = ["China", "India", "USA"]
for (let i = 0; i < largestCountries.length; i++){
    console.log(largestCountries[i])
}