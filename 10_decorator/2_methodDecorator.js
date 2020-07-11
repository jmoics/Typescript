/* Un decorador de métodos se declara antes de la declaración del método necesario.
 * Se utilizan para modificar, observar o reemplazar una definición de método.
 * La lógica del decorador se aplica al atributo Descriptor de propiedad del método respectivo.
 * La función decoradora de métodos se invocará en tiempo de ejecución con los siguientes tres argumentos:
   - target: la función constructora de la clase para un miembro estático o el prototipo de la clase para un miembro de instancia
   - Clave - nombre del método decorado
   - descriptor - Valor del descriptor de propiedad del método
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logMethod() {
    return function (target, propertyKey, descriptor) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                console.log('Arguments: ', args.join(', '));
                var result = descriptor.value.apply(target, args);
                console.log('Total Payable Amount is: ', result);
                return result;
            }
        };
    };
}
var ProductB = /** @class */ (function () {
    function ProductB() {
    }
    ProductB.prototype.calculateAmountPayable = function (price, quantity) {
        return price * quantity;
    };
    __decorate([
        logMethod()
    ], ProductB.prototype, "calculateAmountPayable", null);
    return ProductB;
}());
var p = new ProductB();
p.calculateAmountPayable(220, 3);
