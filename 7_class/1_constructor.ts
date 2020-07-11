/* los constructores se ejecutan automaticamente en el momento en que una instancia de la clase es creada al usar "new"
 * para crear un constructor, una funcion con nombre constructor es usado.
 * solo se puede crear uno por clase
 * podemos tambien usar parametros opcionales con una funcion constructor.
 */

class Product2 {
    productId: number;
    constructor(productId: number) { //constructor parametrizado es utilizado para inicializar productId
        this.productId = productId;
    }

    getProductId(): string {
        return "";
    }
}

var product: Product2 = new Product2(1234); //creando instancia de clase con el constructor