function outer() {
    let a = 10;
    function inner() {
        let b = 20;
        console.log(a + b);
    }
    return inner();
}
outer(); // inner function has access to 'a' from outer function scope
let inner = outer();
inner(); // prints 30 but outer was not called so inner shouldn't have access to 'a' but it does due to closure

