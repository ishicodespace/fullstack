let arr = [1, 3, 4, 6, 8, 10];
let num = 5;
let returnLarger = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
};

returnLarger(arr, num);
