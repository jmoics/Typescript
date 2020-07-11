/* Decorator se utiliza para proporcionar metadatos y se utilizan para especificar el comportamiento adicional de una clase, método o propiedad de una clase.
 * Los decoradores se utilizan para la programación declarativa.
 * Los decoradores se utilizan para implementar cross-cutting concerns (algo así como union de módulos).
 * Angular2 hace uso de decoradores.
 * @component, @inject, @service, @pipe son algunos de los decoradores integrados utilizados en Angular2 para aplicar metadatos en las clases para implementar diferentes conceptos de Angular2.
 */

/* Un decorador es un tipo de declaración que puede modificar o proporcionar metadatos para una propiedad, método o parámetro de método, así como para las clases.
 * Los decoradores usan la forma @expression, donde la expresión puede representa una lógica de negocio que se llamaría en tiempo de ejecución con la información necesaria, respectivamente.
 * El desarrollador debe habilitar el decorador a través de la opción del compilador experimentalDecorators, cualquiera de las dos formas mencionadas a continuación se puede usar para lo mismo:
   - a través de la interfaz de línea de comando.
   - tsconfig.json
 * Usando Command Line: 
   - tsc --target ES5 --experimentalDecorators
   - Usando tsconfig.json: 
 {
    "compilerOptions":  {
                            "target": "ES5",
                            "experimentalDecorators": true
                        }
 }
 */


/* Un decorador de clase se usa justo antes de una declaración de clase.
   - Se puede usar para modificar, observar o reemplazar cualquier definición de clase.
   - Los decoradores de clase se aplican al constructor de la clase definida por el usuario.
   - El decorador de clase en tiempo de ejecución anula la lógica del constructor original con una nueva, solo devuelve argumentos.
   - Podemos registrar, modificar o reemplazar el constructor original dentro de la función decoradora de clase.
 */

function invoke(constructor:Function) {
  // the new constructor behaviour
 const newconstructor: any = function(...args) { //sobreescribiendo el constructor original y retornando el nuevo constructor utilizando logClass decorator.
    this.productId = 875;
    this.productName = 'Tablet';
    };
// return newconstructor will override the original constructor
 return newconstructor;
}
@invoke
class Product {
  public productId: number;
  public productName: string;
  constructor(productId: number, productName: string) {
      this.productId = productId;
      this.productName = productName;
      }
}
const p = new Product(326, 'Mobile');
console.log(`Product id is: ${p.productId}`); //875
console.log(`Product name is : ${p.productName}`); //Tablet

// tsc --experimentalDecorators --target ES5 1_decoratorDemo.ts