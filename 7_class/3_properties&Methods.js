/* En lugar de declarar variables de instancia y pasar los parámetros al constructor,
 * podemos reducir el código solo añadiendo especificadores de accesos a los parametros que se pasan al constructor.
 */
var passcode = "secret passcode";
var Product = /** @class */ (function () {
    function Product(_productName) {
        this._productName = _productName;
        // linea inicial de declaración y el seteo del valor dentro del constructor es removido y el parametro es declarado con el private keyboard (tambien aplica para protected y public)
    }
    Object.defineProperty(Product.prototype, "productName", {
        /* Typescript provee opciones para añadir getters y setters para acceder a los miembros de clase o modificarlos.
         * No se tiene una opción directa habilitada para acceder atributos private desde fuera de la clase. Se puede usar accessors en Typescript para lo mismo.
         */
        get: function () {
            return this._productName;
        },
        set: function (newname) {
            if (passcode && passcode == "secret passcode") {
                this._productName = newname;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
var product = new Product('Samsung');
console.log('Product Name: ' + product.productName);
product.productName = 'LG';
console.log('Product Name: ' + product.productName);
