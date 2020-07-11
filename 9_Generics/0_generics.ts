/* Los genéricos nos ayudan a evitar volver a escribir el mismo código para diferentes tipos de datos.
 * En TypeScript, los genéricos se usan junto con:
   - Con function para invocar el mismo código con diferentes tipos de argumentos.
   - Con Array para acceder a la misma declaración de matriz con un conjunto diferente de types.
   - Con interface para implementar la misma declaración de interfaz por diferentes clases con diferentes types.
   - Con class para acceder a la misma clase con diferentes tipos mientras se crea una instancia.
 */
function printString(stringData: string): string {
    return stringData;
}
function printNumber(numberData: number): number {
    return numberData;
}

// <T> representa type parameter. Generaliza el tipo de parámetro y el retorno de la función.
function printData<T>(data: T): T {
    return data;
}

let data = printData<string>('Hello'); // Al colocar el tipo en la función, este es el que decidirá el tipo del parámetro que debe pasarse a la función.
console.log(data);

data = printData('Hello'); // Al no colocar el tipo en la función, quien decide el tipo de retorno es el tipo del valor pasado como parámetro.
console.log(data);

let data1 = printData(1); // Ahora haciendo la invocación para number.
console.log(data);

class Product {
    productName: string;
}

let prod = new Product();
console.log(printData<Product>(prod).productName);

// También puede usarse para devolver un array de un tipo específico.
function orderDetails<T>(arg: Array<T>): Array<T> {
    return arg;
}

let orderid: Array<number> = [101,102,103,104,105]; 
let orderlist = orderDetails(orderid);

let ordername: Array<string> = ['footwear','dress','cds','toys','shoes']; 
let namelist = orderDetails(ordername);




// Los tipos genéricos tambien aplican para clases o interfaces (como tipos)
interface Inventory<T> {
    addItem: (newItem: T) => void;
    getProductList: () => Array<T>;
}

// for string
class Gadget implements Inventory<string> {
    addItem(newItem: string): void {
        console.log("Item added");
        
    }
    productList: Array<string> = ["Mobile", "Tablet", "Ipod"];
    getProductList(): Array<string> {
        return this.productList;
    }

}
let productInventory: Inventory<string> = new Gadget();
let allProducts: Array<string> = productInventory.getProductList();




// para clases
class Gadget2 <T> {
    productList: Array<T>;
    addItems(newItemList: Array<T>): void {
        this.productList = newItemList;
        console.log('Item added');
    }

    getProductList(): Array<T> {
    return this.productList;
    }
}
const product = new Gadget2<string> ();
const productList: Array<string> = ['Mobile', 'Tablet', 'Ipod'];
product.addItems(productList);
const allProducts2: Array<string> = product.getProductList();
console.log('The available products are ' + allProducts2);