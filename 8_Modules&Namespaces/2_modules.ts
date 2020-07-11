/* Los módulos nos ayudan a agrupar un conjunto de funcionalidades bajo un nombre común. No se puede acceder al contenido de los módulos a menos que se exporte.
 * Preceda la palabra clave de exportación a la función, clase, interfaz, etc. que necesita exportar desde un módulo.
 * 
 * Se puede exportar de dos maneras: agregando export delante de una función, clase o interfaz. O agregando un bloque export.
 */
export function MaxDiscountAllowed(noOfProduct: number): number { //export en function.
    return;
}
class Utility {
    CalculateAmount(price: number, quantity: number): number {
        return;
    }
}
export interface Category { // exportando interface
}
export const prodName: string = ""; // exportando const
export {Utility};


/* Podemos importar un módulo con otro módulo u otro archivo ts usando la palabra clave import. Necesitamos dar el nombre del archivo como el nombre del módulo al importar.
 * Una vez que se importa el módulo, podemos hacer uso de las clases y otras construcciones exportadas desde el módulo.
 */
import {Utility, Category, prodName, MaxDiscountAllowed } from "./2_modules"; // el nombre del archivo es considerado para ser el nombre del módulo.

let util = new Utility(); // una vez que el módulo es importado ya podemos usar las Clases y otros elementos exportados.
let price = util.CalculateAmount(1300, 4);
let discount = MaxDiscountAllowed(2);

/* También podemos utilizar un alias mientras se importa o exporta módulos.
 */
export { Utility as mainUtility }; // utilizando alias en export
import { mainUtility } from "./2_modules"; // importando con el alias exportado
import { Utility as mainutil } from "./2_modules"; // dando un alias mientras se importa.
import * as mainutil2 from "./2_modules"; // utilizando * para asignar esto a un alias para importar todo lo del módulo.

/* Se deben compilar tanto los módulos y los archivos que usan los módulos al mismo tiempo, la diferencia con namespaces es que no se asigna un outfile */