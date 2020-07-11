/* La configuración del proyecto en TypeScript se utiliza para establecer las opciones del compilador y también nos ayuda a especificar los archivos que se incluirán o excluirán al realizar la compilación.
 * La configuración del proyecto TypeScript se puede realizar utilizando uno de los siguientes enfoques:
   - tsc: con la línea de comando junto con el comando tsc
   - IDE: configuración de opciones en el IDE con el que ha codificado TypeScript
   - Build Tool: uso de cualquier generador de tareas como Grunt o Gulp
   - tsconfig.json: dentro de un archivo con el nombre tsconfig.json
 * La opción del compilador se utiliza para especificar configuraciones como la versión ES de destino que se utilizará para compilar, el cargador de módulos que se utilizará, etc.
 * Hay muchas opciones de compilador disponibles que puede consultar en la documentación del mecanografiado
 * Las opciones comunes de compilación utilizadas son:
   - --module (--m): El desarrollador puede especificar la generación de código de módulo: 'none', 'commonjs', 'amd', 'system', 'umd', 'es6' o 'es2015'.   (tsc --module commonjs filename.ts)
   - --sourcemap: Genera el archivo '.map' correspondiente que se utiliza para realizar la depuración.   (tsc --sourceMap filename.ts)
   - --target (--t): El desarrollador puede especificar la versión de destino de ECMAScript: 'es3' (predeterminado), 'es5' o 'es6'.  (tsc --target ES2015 filename.ts)
   - --watch (--w): Ejecute el compilador en modo reloj. Mire los archivos de entrada y active la recompilación de los cambios.   (tsc --watch filename.ts)
   - --outDir: El desarrollador puede redirigir la estructura de salida al directorio.   (tsc --outDir foldername filename.ts)
   - --outFile: Ayuda en la concatenación y emisión de salida a un solo archivo.   (tsc --outDir foldername filename.ts)
       El orden de concatenación está determinado por la lista de archivos pasados al compilador en la línea de comando junto con las referencias e importaciones de triple slash
 */



/* Role y estructura de tsconfig.json */
/* Se utiliza para proporcionar opciones de compilación a un proyecto TypeScript
 * Ayuda a especificar los archivos que se incluirán o excluirán del proyecto
 * También podemos encontrar la raíz de una aplicación TypeScript utilizando el archivo tsconfig.json ya que el archivo tsconfig.json reside en la carpeta raíz.
 {
     "compilerOptions": { // provee opciones de compilador para ser configuradas mientras se compila archivos .ts
                            "target": "es5",
                            "outDir": "js"
                            "module": "amd"
                            "outFile": "moduletest.js"
                        },
     "files": [  //provee nombres de archivo para ser compilados con opciones de compilador configuradas.
                    "filename1.ts",
                    "filename2.ts"
              ]
 }
 */

// Una vez que agreguemos el archivo tsconfig.json, podemos usar el comando tsc para compilar los archivos usando el archivo tsconfig.json.