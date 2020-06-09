/*
Las interfaces pueden utilizarse para definir la estructura de funciones, de forma similar a hacerlo para objetos.
Una vez la interfaz para una función es declarada, podemos crear variables de ese tipo y asignarle funciones a la variable siempre que la función coincida con la firma definida en la interfaz.
La interfaz de tipo de función se utiliza para imponer el mismo número y tipo de parámetros a cualquier función que se haya declarado con la interfaz de tipo de función.
*/
function createCustomerID(name: string, id: number): string {
    return 'The customer id is ' + name + ' ' + id;
}

// Definiendo interfaz con declaracion de funciones. Solo se proporciona parametros y tipo de retorno.
interface StringGenerator {
    (char: string, nums: number): string;
    //(chars: string): string; // error de compilación en la asignación de la función a la variable.
}

// Se declara la variable con la interfaz como tipo.
let idGenerator: StringGenerator;

// Se asigna la funcion a la variable de tipo de la interfaz para forzar el tipo a la funcion.
idGenerator = createCustomerID;

// Se invoca la funcion con los parametros del mismo tipo de la interfaz, si no lo hacemos dará error de compilación.
const customerId: string = idGenerator("Mr. Tom", 101);

console.log(customerId);