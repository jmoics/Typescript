/*
 * public: accesibles desde fuera de la clase.
 * private: accessibles desde dentro de la clase.
 * protected: accesibles desde dentro de la clase y por herencia.
 */

class Product {

    private productId: number;
    public productName: string;
    protected productCategory: string;
    static productPrice: number = 1000; // variable static

    // declaration of constructor with 3 parameters
    constructor(productId: number, productName , productCategory) {
        this.productId = productId;
        this.productName = productName;
        this.productCategory = productCategory;
    }

    static getProductPrice(): number { // función static accediendo a productPrice (static)
        return Product.productPrice;
    }

    getProductPrice2(): number {
        return Product.productPrice; // variable static dentro de una función no static.
    }

    // method ot display product id details
    getProductId() {
        console.log('The Product id is : ' + this.productId);
    }
}

class Gadget extends Product {
    getProduct(): void {
        console.log("Product Category: " + this.productCategory); // Accediendo a productCategory dentro de una clase heredada ya que fue declarada como protected.
    }
}

var product: Product = new Product(1234, 'Samsung Galaxy', 'Phone');
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