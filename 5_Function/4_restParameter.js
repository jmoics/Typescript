/*
Rest Parameter es utilizado para pasar multiples valores a un simple parametro de una funcion. Se aceptan cero o más valores.
    - Debe ser declarado como un array.
    - El parametro rest debe ser precedido por 3 puntos para ser considerado como tal.
    - Debe ser el último parametro de la funcion.
*/
function getProductDetails4(productId) {
    var productName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        productName[_i - 1] = arguments[_i];
    }
    return "Product: " + productName + " " + productId;
}
var productName5 = getProductDetails4(101, "Mobile", "Furniture");
