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
//# sourceMappingURL=1_namespaceDemo.js.map