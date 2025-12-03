let uniqueCharacters = (str) => {
//   let unique = [];
//   unique.length = 26;
//   for (let i = 0; i < unique.length; i++) {
//     unique[i] = 0;
//   }
//   let nstr = "";
//   for (let i = 0; i < str.length; i++) {
//     let index = str.charCodeAt(i) - 97;
//     if (unique[index] == 0) {
//       nstr += str[i];
//       unique[index] = 1;
//     }
    //   }
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        if (ans.indexOf(str[i]) == -1) {
            ans += str[i];
        }
    }
  return ans;
};
console.log(uniqueCharacters("abcdaaefghaijj"));
