"use strict";
exports.__esModule = true;
var _2_modulesDemo_1 = require("./2_modulesDemo");
var util = new _2_modulesDemo_1.Utility();
var price = util.CalculateAmount(1350, 4);
var discount = _2_modulesDemo_1.MaxDiscountAllowed(2);
console.log("Maximum discount allowed is: " + discount);
console.log("Amount to be paid: " + price);
console.log("ProductName is: " + _2_modulesDemo_1.productName);
