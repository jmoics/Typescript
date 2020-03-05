/* Arrow function is a concise way of writing a function. Whenever we need a function to be written with in a loop, arrow function will be the opt choice.
   We do not use the function keyword to define an arrow function.
   In a shopping cart application we can use arrow function to perform filtering, sorting, searching operations and so on. */
var getProductDetails = function (productId) { return "Product ID" + productId; }; //Arrow function with parameters, return type and function body.
/*-----------------------------------------------------------------*/
var Product = /** @class */ (function () {
    function Product() {
        this.productName = "Mobile";
    }
    Product.prototype.getProductDetails = function () {
        return "Product: " + this.productName; //It has Product class scope, so we can access to productName
    };
    Product.prototype.testThisFunction = function () {
        setTimeout(function () {
            console.log(this.productName); //It has current funciton scope as it's used within call back function. Hence we can't access to productName (in console will show undefined)
        }, 0);
    };
    return Product;
}());
var prod = new Product();
prod.testThisFunction();
/*
   In a class, if a method wants to access the property of the class it has to use "this" keyword.
   For a particular object, "this" keyword will help to access the properties of the current object. This is possible, because all the methods and properties are with in the same scope.
   In the above example, when we use this.productName inside the getProductDetails method, getProdcutDetails and productName are in the same scope. Also we get the desired result.
   But when we use this.productName inside setTimeout function, instead of directly using it in testThisFunction method, the scope of this.productName will be inside the setTimeout's callback function and not the testThisFunction method. That is why we are not able to access the value of productName for that particular object.
   If we need to access the class scope with this keyword inside the callback function we can use arrow function.
   Arrow function lexically captures the meaning of the this keyword.

   We can rewrite the same logic using arrow function as below:
*/
var Product2 = /** @class */ (function () {
    function Product2() {
        this.productName = "Mobile";
    }
    Product2.prototype.getProductDetails = function () {
        return "Product: " + this.productName; //It has Product class scope, so we can access to productName
    };
    Product2.prototype.testThisFunction = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.productName); //It has Product class scope as it's defined using Arrow function. Hence we can access to productName.
        }, 0);
    };
    return Product2;
}());
var prod = new Product2();
prod.testThisFunction();
/*
   In the above code, this.productName is written inside an arrow function. Since the callback function of setTimeout is implemented using the arrow function,
   IT DOES NOT CREATE A NEW SCOPE and it will be in the same scope as the testThisFunction method.
*/ 
