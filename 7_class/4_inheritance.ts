/* Inheritance es el proceso de extender una clase desde una clase existente y reusar las funciones y propiedades de la clase heredada en la subclase.
 * Typescript soporta herencia de clase, donde podemos reusar las funcionalidades de la super clase dentro de las subclases.
 * El constructor de la superclase debe invocarse usando la función super.
 */
class ProductB {
    protected productId: number;
    constructor(productId: number) {
        this.productId = productId;
    }

    getProduct(): void {

    }
}

class Gadget extends ProductB {
    constructor(public productName: string, productId: number) {
        super(productId); // si la subclase tiene un constructor es obligatorio invocar el constructor de la superclase.
    }

    // se puede sobreescribir los métodos de la superclase desde la subclase especificando la misma firma (nombre) del método de la superclase.
    getProduct(): void {
        super.getProduct(); // podemos usar super para acceder a los métodos de la superclase desde dentro de los métodos de la subclase.
    }
}