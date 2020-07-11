/* Los ambient declarations se utilizan para crear type definitions para una biblioteca JavaScript específica o un archivo JavaScript
 * El ambient declaration se usa básicamente para decirle a TypeScript que estamos tratando de describir un código que existe en otro lugar y resolverlo en tiempo de ejecución.
 * Son un tipo de contrato que hacemos con el compilador. Si estos no existen en tiempo de ejecución e intentamos usarlos, entonces la ejecución se rompe.
 * Para crear un ambient declaration, use la palabra clave declare. Podemos crear un módulo ambiental o clase o interfaz o variable.
 */
// declarando un ambient module
declare module "modulename" {
    export function declaration();
}
// declarando un ambient class
declare class classname {
    function declaration();
}
// declarando un ambient interface
declare interface interfacename {
    function declaration();
}

// Para usar una declaración ambiental, usamos la referencia de triple slash (///).
/// <reference path="filename.d.ts"/>

// Ejemplo: jquery.d.ts
// Declarando clase jQuery y la función $ retornando la clase jQuery dentro del archivo jquery.d.ts
declare class jQuery {
    html(html: string): void;
}
declare function $(query: string): jQuery;

// test_ambient.ts
// Cargando el archivo jquery.d.ts usando triple slash (///) y accediendo la función $ y la función html declarada.
// Esto será resuelto en tiempo de ejecución, añadiendo la librería jquery.js
/// <reference path="jquery.t.ds"/>
$("#id").html("");