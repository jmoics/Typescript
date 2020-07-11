/* En lugar de declarar variables de instancia y pasar los parámetros al constructor, 
 * podemos reducir el código solo añadiendo especificadores de accesos a los parametros que se pasan al constructor.
 */
let passcode = "secret passcode";

class Product {
    constructor(private _productName: string) { 
        // linea inicial de declaración y el seteo del valor dentro del constructor es removido y el parametro es declarado con el private keyboard (tambien aplica para protected y public)
    }

    /* Typescript provee opciones para añadir getters y setters para acceder a los miembros de clase o modificarlos.
     * No se tiene una opción directa habilitada para acceder atributos private desde fuera de la clase. Se puede usar accessors en Typescript para lo mismo.
     */
    get productName(): string {
        return this._productName;
    }

    set productName(newname: string) {
        if (passcode && passcode == "secret passcode") {
            this._productName= newname;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let product = new Product('Samsung');
console.log('Product Name: ' + product.productName);
product.productName = 'LG';
console.log('Product Name: ' + product.productName);


// tsc --target ES5 "3_properties&Methods.ts" (para accessors)