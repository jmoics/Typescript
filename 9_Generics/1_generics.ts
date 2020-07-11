/* Los generic constraints (restricciones) se utilizan para agregar restricciones al tipo genérico.
 * Los generic constraints se agregan usando la palabra clave extend.
 *
 * Considere el siguiente código:
 * Aquí estamos intentando acceder a la propiedad de longitud del parámetro de tipo de función.
 * Como el tipo de parámetro se resolverá solo en tiempo de ejecución, esta línea arrojará una compilación
 */
function orderDetails<T>(arg: T): T {
    console.log(arg.length);
    return arg;
}

/* Para resolver esto, podemos agregar una restricción con el parámetro type.
 * Si necesitamos acceder a una propiedad en el tipo de parámetro, podemos agregar esas propiedades en una interfaz o clase y extender el parámetro de tipo desde la interfaz o clase declarada.
 */
interface AddLength {
    length: number;
}

function orderDetails<T extends AddLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}

class Product2 implements AddLength {
    length: number = 10;
}

let product2: Product2 = new Product2();
let product1 = orderDetails(product2); //aqui funciona debido a que la clase Product2 tiene un atributo length.

let orderName: Array<string> = ['footwear', 'dress', 'cds', 'toys']; //este funciona porque un array tiene una funcion length.
let nameList = orderDetails(orderName);