import { Utility as mainUtility, Category, productName, MaxDiscountAllowed } from "./2_modulesDemo";
const util = new mainUtility();
const price = util.CalculateAmount(1350, 4);

const discount = MaxDiscountAllowed(2);
console.log(`Maximum discount allowed is: ${discount}`);

console.log(`Amount to be paid: ${price}`);
console.log(`ProductName is: ${productName}`);

// tsc 2_modulesDemo.ts 2_modulesImport.ts