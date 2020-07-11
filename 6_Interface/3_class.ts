// Podemos hacer uso de la interfaz para definir tipos de clase para hacer cumplir explícitamente que una clase cumpla con un contrato en particular. 
// Utilizamos la palabra clave implements para implementar la interfaz dentro de una clase.
// Para imponer el tipo de interfaz en una clase, mientras se crea una instancia del objeto de una clase, se declara utilizando el tipo de interfaz.
// Solo las funciones y propiedades declaradas por la interfaz estarán disponibles con el objeto instanciado.

// declarando una interfaz Product
interface Products {
    displayProductName: (prouctId: number) => string;
    getProductDetails(): string[];
}

// declarando clase Gadget la cual implementa interfaz Products
class Gadget implements Products {
    getProductDetails(): string[] {
        return ['Samsung', 'LG', 'Moto'];
    }
    displayProductName(productId: number): string {
        if (productId === 101) {
            return 'Product Name is Mobile';
        } else if ( productId === 201) {
            return 'Product Name is Tablet';
        }
    }

    getGadget(): string[] {
        return ['Mobile', 'Tablet', 'iPad', 'iPod'];
    }
}

// creando instancia de clase de tipo interfaz
const gadget: Products = new Gadget();

// creando variable para contener (hold) el valor de retorno de la funcion displayProductName
const productName: string = gadget.displayProductName(101);

// creando variable para contener el valor de retorno de la funcion getProductDetails.
let prodDet: Array<string> = gadget.getProductDetails(); //si en la interfaz comentamos el metodo getProductDetails esta linea no compilaria.

console.log(productName);
console.log(prodDet);