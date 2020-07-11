/* Un decorador de métodos se declara antes de la declaración del método necesario.
 * Se utilizan para modificar, observar o reemplazar una definición de método.
 * La lógica del decorador se aplica al atributo Descriptor de propiedad del método respectivo.
 * La función decoradora de métodos se invocará en tiempo de ejecución con los siguientes tres argumentos:
   - target: la función constructora de la clase para un miembro estático o el prototipo de la clase para un miembro de instancia
   - Clave - nombre del método decorado
   - descriptor - Valor del descriptor de propiedad del método
 */

function logMethod() {

    return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
        return {
            value: (...args: any[]) => {
                console.log('Arguments: ', args.join(', '));
                const result = descriptor.value.apply(target, args);
                console.log('Total Payable Amount is: ', result);
                return result;
            }
        };
    };
}

class ProductB {

    @logMethod()
    calculateAmountPayable(price: number, quantity: number) {
        return price * quantity;
    }
}

const p: ProductB = new ProductB();
p.calculateAmountPayable(220, 3);