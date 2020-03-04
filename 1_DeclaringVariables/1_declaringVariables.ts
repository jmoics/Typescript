/* Using var and let */
/* var has function scope and it can be accessed outside loop */
function displayProduct(condition: boolean) {
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

console.log("-------------Using variable Scope Var--------------");
/* Variable scope using var, it has function scope and setTimeout will be executed only once after the loop */
for (var i = 0; i < 10; i++) {
    setTimeout(function() {console.log(i);}, 100 * i);
}

console.log("-------------Using variable Scope Let--------------");
/* Variable scope using let, it has block scope and setTimeout will be executed each iteration */
for (let i = 0; i < 10; i++) {
    setTimeout(function() {console.log(i);}, 100 * i);
}

/* ReDeclaring variables with var in the same scope is permited */
var productDesc;
var productDesc;

/* ReDeclaring variables with let in the same scope is not permited */
let productPrice;
let productPrice;
if (true) {
    let productPrice; // in different scope yes
}

const productBrand = "Adidas";
productBrand = "Avivas"; //Cannot reassign value (no compile)

const products:string[] = ["Gadget","Furniture","Accessories"];
products[3] = "Books";
products = ["Cloths","BedSheets"]; //Cannot reassign entire array (No Compile)