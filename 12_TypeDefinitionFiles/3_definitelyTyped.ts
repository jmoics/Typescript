/* Escribir un archivo de type definition lleva mucho tiempo, dependiendo del tamaño de la biblioteca de JavaScript o del archivo de JavaScript. 
 * Tenemos muchos colaboradores disponibles que han reunido definiciones de tipos para más de 400 bibliotecas de JavaScript, que se pueden encontrar en el popular proyecto DefinitelyTyped en GitHub.
 * Definitivamente Typed es un gran repositorio de definiciones de tipos
 * Los archivos de type definition están disponibles en un único repositorio de Github
 * Podemos clonar / descargar los archivos de type definition del repositorio definitivamente escrito de Github.
 */

/* Typings se utiliza para buscar y descargar archivos de definición de tipo.
 * Podemos obtener las definiciones de tipo de múltiples fuentes como npm, definitelytyped, bower, etc.
 * Typings gestiona las referencias a las definiciones instaladas.
 */

/* Para comenzar con tipings, instálelos globalmente desde npm. 
 * npm install -g typings
 * 
 * Una vez que Typings está instalado en la máquina, podemos descargar los archivos de definición de tipo usando el comando Typings desde la línea de comandos:
 */
// typings install source~typedefinitionfilename -save --global

// source: Establece la fuente desde la que se deben descargar los archivos de definición de tipo. Puede ser dt - desde el repositorio definitely typed, npm - desde el registro npm,  bower - desde bower
// -save: Guarda las dependencias del módulo si las hay
// --global: Instala y persiste la definición como global

// Ejemplo: typings install dt~jquery --global