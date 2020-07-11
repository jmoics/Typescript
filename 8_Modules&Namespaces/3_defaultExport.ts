/* La exportación predeterminada se utiliza para exportar cualquiera de las construcciones, como clase, interfaz, función, etc., desde el módulo actual como predeterminada.
 * Las exportaciones predeterminadas son útiles en caso de que necesitemos exportar una clase que tenga casi todas las funcionalidades asociadas, como el objeto de biblioteca javascript jQuery.
 * El nombre de las construcciones exportadas predeterminadas es opcional. Podemos asignar un nombre a la construcción predeterminada mientras lo importamos en el otro archivo.
 * No podemos tener más de una exportación predeterminada por módulo.
 */
export default class {
    productName: string = "Tablet";
    getProductDetails(productId: number): string {
        return;
    }
}
export class Utility {
}

import Product, {Utility} from  './3_defaultExports'; // al importar, el nombre de las clases exportadas no default deben de estar entre llaves.
let product = new Product(); // Una vez la clase default es exportada podemos usarla creando una instancia de la clase.
let details = product.getProductDetails(1001);