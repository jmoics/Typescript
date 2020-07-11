/// <reference path="./1_namespaceDemo.ts" />
var util = Utility.Payment;
var paymentAmount = util.CalculateAmount(1255, 6);
console.log("Amount to be paid: " + paymentAmount);
var discount = Utility.MaxDiscountAllowed(6);
console.log("Maximum discount allowed is: " + discount);
//# sourceMappingURL=1_namespaceImport.js.map