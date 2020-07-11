// En el ejemplo debajo estamos creando un namespace llamado Utility y agrupando una función MaxDiscountAllowed y un namespace anidado llamado payment dentro.
namespace Utility {
    export namespace Payment {
        export function CalculateAmount(price: number, quantity: number): number { //namespace anidado.
            return price * quantity;
        }
    }

    export function MaxDiscountAllowed(noOfProduct: number): number {
        if (noOfProduct > 5) {
            return 40;
        } else {
            return 10;
        }
    }

    function privateFunc(): void { // función private que no será exportada.
        console.log('This is private...');
    }
}