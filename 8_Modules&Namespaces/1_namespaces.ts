/*
 * Namespace es utilizado para agrupar funciones, clases o interfaces bajo un mismo nombre.
 * El contenido de los namespaces están ocultos por default a menos que se exporte.
 * Podemos tener namespaces anidados (nested) si se requiere.
 * La función or algún constructor que no es exportado no puede ser accesible fuera del namespace.
 */
namespace namespacename {
    export namespace namespacename { // podemos tener namespaces anidados dentro de otro namespace y exportar el namespace interno si se requiere.
        export function functionName() {

        }
    }

    export function functionName() { // "export" Precede la función, interface o clase que necesitas exportar.

    }
}
