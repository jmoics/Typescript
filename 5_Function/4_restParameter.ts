/*
Rest Parameter es utilizado para pasar multiples valores a un simple parametro de una funcion. Se aceptan cero o más valores.
    - Debe ser declarado como un array.
    - El parametro rest debe ser precedido por 3 puntos para ser considerado como tal.
    - Debe ser el último parametro de la funcion.
*/
function getProductDetails4(productId: number, ...productName: string[]): string {
    return "Product: " + productName + " " + productId;
}

let  productName5: string = getProductDetails4(101, "Mobile", "Furniture");