// En el ejemplo debajo estamos creando un namespace llamado Utility y agrupando una función MaxDiscountAllowed y un namespace anidado llamado payment dentro.
var Utility;
(function (Utility) {
    var Payment;
    (function (Payment) {
        function CalculateAmount(price, quantity) {
            return price * quantity;
        }
        Payment.CalculateAmount = CalculateAmount;
    })(Payment = Utility.Payment || (Utility.Payment = {}));
    function MaxDiscountAllowed(noOfProduct) {
        if (noOfProduct > 5) {
            return 40;
        }
        else {
            return 10;
        }
    }
    Utility.MaxDiscountAllowed = MaxDiscountAllowed;
    function privateFunc() {
        console.log('This is private...');
    }
})(Utility || (Utility = {}));
// asi se importa namespaces.
/// <reference path="1_namespacesDemo.ts" />
var util = Utility.Payment; // importando el namespace anidado.
var paymentAmount = util.CalculateAmount(1200, 6); // invocando la función exportada en el namespace.
console.log("Amount to be paid: " + paymentAmount);
var discount = Utility.MaxDiscountAllowed(6);
console.log("Maximun discount allowed is: " + discount);
//Utility.privateFunc(); // error, invocar una función no exportada lo produce.
// tsc --outFile 1_namespaces.js 1_namespaces.ts 1_namespacesDemo.ts
