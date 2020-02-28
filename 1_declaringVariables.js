/* Using var and let */
/* var has function scope and it can be accessed outside loop */
function displayProduct(condition) {
    if (condition) {
        var productName = "Mobile";
    }
    return productName;
}
console.log(displayProduct(true));
console.log(displayProduct(false));
/*function displayProduct2(condition: boolean) {
    if (condition) {
        let productName = "Mobile";
    }
    return productName; // not compile
}

console.log(displayProduct(true));
console.log(displayProduct(false));*/
console.log("-------------Using variable Scope Let--------------");
var _loop_1 = function (i_1) {
    setTimeout(function () { console.log(i_1); }, 100 * i_1);
};
/* Variable scope using let, it has block scope and setTimeout will be executed each iteration */
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}
console.log("-------------Using variable Scope Var--------------");
/* Variable scope using var, it has function scope and setTimeout will be executed only once after the loop */
for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}
