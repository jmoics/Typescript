/*
Una interface es usada para definir contratos en el codigo:
- Para imponer el chequeo de tipos mediante la definicion de oontratos
- Colección de properties y declaraciones de metodos.
- Los atributos y metodos no deben tener modificadores de acceso.
- Los atributos no pueden ser inicializados dentro de la interfaz.
- No son soportadas en Javascript por lo que serán removidas.
- Son usados en su mayoría para detectar errores en la codificación a medida que se realiza.
*/

//La función u objeto que usen esta interfaz deberán tener ambos atributos declarados.
interface Product {
    productId: number;
    productName: string;
    productCategory?: string; //atributo opcional

    //getProductDetails1(productId: number): string;
    //displayProductName: (productId: number) => string; // declaracion utilizando arrow function
}

// Al pasar como parámetro un objeto de tipo Producto, 
// si el objeto pasado no tiene los atributos declarados en la interfaz generará un error de compilación.
function getProductDetails(productObj: Product): string {
    return 'The product name is : ' + productObj.productName;

    // No compila debido a que productPrice no esta declarado en la interfaz
    // return 'The product name is : ' + productObj.productName + ' and product price is : ' + productObj.productPrice;
}

// Forma correcta de usar el tipo interfaz
let productObj = { productId: 1001, productName: 'Mobile' };

// Forma incorrecta de usar el tipo interfaz porque no tiene productId
let productObj2 = { productCategory: 'Gadget', productName: 'Mobile' };

getProductDetails(productObj);


/*** Duck-Typing ****/
// Es una regla para revisar compatibilidad de tipos en tipos de variables más complejas.
// El compilador de Typescript utiliza Duck-Typing para comparar que dos objetos tengan los mismos atributos con el mismo tipo
// Pese a ello es correcto que un objeto asignado con el tipo de una interfaz tenga más atributos que los declarados en la interfaz. Los atributos adicionales serán omitidos en la revisión.
let productObj3 = { productId: 1001, productName: 'Mobile', productCategory: 'Gadget', productPrice: 15000 };

getProductDetails(productObj3);