"use strict";
exports.__esModule = true;
var _3_defaultExportDemo_1 = require("./3_defaultExportDemo");
var product = new _3_defaultExportDemo_1["default"]();
var details = product.getProductDetails(1001);
console.log(details);
var util = new _3_defaultExportDemo_1.Utility();
var price = util.CalculateAmount(1300, 4);
console.log("The price is " + price);
