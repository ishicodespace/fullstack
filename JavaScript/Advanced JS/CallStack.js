function one() {
    return 1;
}
function two() {
    return one()+one();
}
function three() {
    let ans = two() + one(); 
    console.log(ans);
}

//function call or stack frame is created when function is called
three(); 

//call stack visualization
// three()
//    -> two() //calls one() twice
//        -> one()
//        -> one()
//    -> one()
// ans = 3

//ans variable is not accessible after three() execution is complete
//console.log(ans); //ReferenceError: ans is not defined