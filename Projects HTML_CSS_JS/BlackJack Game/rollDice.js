for (i = 1; i <= 50; i++) {
  console.log(Math.floor(Math.random() * 7)); //-> generates random number between 0 and 1
  //we dont use Math.random(7) cause it will also print 0
  //to exclude 0 from the output add 1 -> Math.random(6)+1
}