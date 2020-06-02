/* Arrow function is a concise way of writing a function. Whenever we need a function to be written with in a loop, arrow function will be the opt choice.
   We do not use the function keyword to define an arrow function.
   In a shopping cart application we can use arrow function to perform filtering, sorting, searching operations and so on. */
var getProductDetails = (productId: string): string => {return "Product ID" + productId}; //Arrow function with parameters, return type and function body.



/*-----------------------------------------------------------------*/
class Product {
    productName: string = "Mobile";
    getProductDetails(): string { //Method
        return "Product: " + this.productName; //It has Product class scope, so we can access to productName
    }

    testThisFunction() {
        setTimeout(function() {
            console.log(this.productName); //It has current function scope as it's used within call back function. Hence we can't access to productName (in console will show undefined)
        }, 0);
    }
} 
var prod = new Product();
prod.testThisFunction();

/* 
    En una clase, si un metodo desea acceder a un atributo de clase, se tiene que usar "this".
    Para un objeto en particular, "this" ayudará a acceder a los atributos del objeto. Esto es posible porque todos los métodos y atributos están en el mismo ámbito (scope)
    En el ejemplo debajo, cuando usamos this.productName dentro del método getProductDetails, getProductDetails y productName estan en el mismo ámbito. Así conseguimos el resultado deseado.
    Pero cuando usamos this.producName dentro de la función setTimeout, en lugar de usarlo directamente en el método testThisFunction, el scope de this.productName estará dentro de la llamada a si mismo de la función setTimeout y no dentro del método testThisFunction. Por ello no tendremos acceso al valor productName para ese objeto en particular.
    Si necesitamos acceder al scope de la clase con "this", podremos hacerlo utilizando la función "arrow".

    Podemos reescribir la misma logica utilizando la función arrow:
*/

class Product2 {
    productName: string = "Mobile";
    getProductDetails(): string {
        return "Product: " + this.productName; //It has Product class scope, so we can access to productName
    }

    testThisFunction() {
        setTimeout(() => {
            console.log(this.productName); //It has Product class scope as it's defined using Arrow function. Hence we can access to productName.
        }, 0);
    }

    /*testThisFunction2() {
        setTimeout(function() {
            console.log(this.productName); //It has not Product class scope.
        }, 0);
    }*/
}
var prod = new Product2();
prod.testThisFunction();
/*
   In the above code, this.productName is written inside an arrow function. Since the callback function of setTimeout is implemented using the arrow function, 
   IT DOES NOT CREATE A NEW SCOPE and it will be in the same scope as the testThisFunction method. 
*/