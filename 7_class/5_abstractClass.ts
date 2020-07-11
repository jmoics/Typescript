/*
 * Clases abstractas son clases base que no son instanciadas.
 * se crean usando abstract keyword.
 * Métodos abstract en clases abstract tambien usan abstract keyword y no son implementados.
 * Ellos deben implementarse dentro de las clases derivadas.
 * Clases abstractas pueden contener métodos abstractos y métodos implementados.
 */
abstract class ProductC {
    getfeatures(): void {

    }
    abstract getProductName(): string;
}

class Gadget extends ProductC {
    getProductName(): string {
        return 'Product name is Mobile';
    }

    getFeatures(): string {
        return 'This product has camera feature';
    }
}