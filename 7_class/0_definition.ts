/* las clases son una plantilla a partir de la cual los objectos pueden crearse
   provee funcionalidad y almacenamiento de estado (state storage)
   esta destinado a implementar funcionalidades reutilizables.
*/
class Product1 {
    productId: number; //variable declarada en la clase.
    getProductDetails(productId: number): string { //funcion definida en la clase.
        return "product id is " + productId;
    }
}