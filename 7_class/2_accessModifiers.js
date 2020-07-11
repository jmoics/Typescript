/*
 * public: accesibles desde fuera de la clase.
 * private: accessibles desde dentro de la clase.
 * protected: accesibles desde dentro de la clase y por herencia.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    // declaration of constructor with 3 parameters
    function Product(productId, productName, productCategory) {
        this.productId = productId;
        this.productName = productName;
        this.productCategory = productCategory;
    }
    Product.getProductPrice = function () {
        return Product.productPrice;
    };
    Product.prototype.getProductPrice2 = function () {
        return Product.productPrice; // variable static dentro de una función no static.
    };
    // method ot display product id details
    Product.prototype.getProductId = function () {
        console.log('The Product id is : ' + this.productId);
    };
    Product.productPrice = 1000; // variable static
    return Product;
}());
var Gadget = /** @class */ (function (_super) {
    __extends(Gadget, _super);
    function Gadget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gadget.prototype.getProduct = function () {
        console.log("Product Category: " + this.productCategory); // Accediendo a productCategory dentro de una clase heredada ya que fue declarada como protected.
    };
    return Gadget;
}(Product));
var product = new Product(1234, 'Samsung Galaxy', 'Phone');
console.log(product.productName);
//console.log(product.productId); // Error de compilacion, productId es private.
/* Typescript posee static keyword. Static puede ser usado en clases, variables o metodos.
 * Una variable static pertenece a la clase y no a la instancia de la clase.
 * Una variable o función declarada como static puede ser accesible usando el nombre de la clase en lugar de la instancia de la clase.
 * Variables static son inicializadas solo una vez, al inicio de la ejecución.
 * Una simple copia de la variable static tiene que ser compartida por todas las instancias de la clase.
 * Variables static pueden ser accedidas dentro de funciones static así como funciones no static.
 */
console.log(Product.productPrice);
Product.productPrice = 2000;
console.log(Product.productPrice);
console.log(Product.getProductPrice());
