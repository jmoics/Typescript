/*
Typescript trata cada parametro de funcion como mandatorio. Cuando la funcion es compilada se verifica que todos los parametros hayan sido provistos, sino da error.
*/
function getProductDetails1(productName, productId) {
    return "Product: " + productName + " " + productId;
}
var productName = getProductDetails1("Mobile"); //error
//console.log(productName);
/*
Los parametros opcionales son usados para hacer un parametro opcional cuando se llama a una funcion.
Los parametros opcionales deben ser llamados al final de todos los mandatorios.
*/
function getProductDetails2(productName, productId) {
    return "Product: " + productName + " " + productId;
}
var productName2 = getProductDetails2("Mobile"); //ok
/*
Los parametros default son usados para asignar un valor a un parametro de funcion.
Si no se provee un valor para el parametro de la funcion o se provee "undefined" como valor del parametro, entonces el valor defaul será considerado.
Si el parametro con valor default está antes que los mandatorios entonces es obligatorio colocar "undefined" si no se desea asignar un valor al parametro.
*/
function getProductDetails3(productName, productId) {
    if (productName === void 0) { productName = "Clothing"; }
    return "Product: " + productName + " " + productId;
}
var productName3 = getProductDetails3(101); //error
var productName4 = getProductDetails3(undefined, 101); //ok
