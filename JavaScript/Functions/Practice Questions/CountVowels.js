let countVowels = (str) => {
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }
  return count;
};
console.log(countVowels("hello world"));


// Practice Question: Return the largest string from an array of strings
let country = [
  "Australia",
  "Germany",
  "United States of America",
  "India",
  "United Kingdom",
];
let largestName = (country) => {
    let largest = country[0].length;
    let index = 0;
  for (let i = 1; i < country.length; i++) {
    if (country[i].length > largest) {
        largest = country[i].length;
        index = i;
    }
  }
  return country[index];
};

console.log(largestName(country));
