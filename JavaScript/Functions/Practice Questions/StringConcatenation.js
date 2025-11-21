function concat(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++){
         newStr += str[i];
    }
    return newStr;
}

console.log(concat(["hello", "hi", "bye"]));