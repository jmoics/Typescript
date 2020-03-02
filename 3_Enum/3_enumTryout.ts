// declaring enum variable and assigning default values
enum MobilePrice { Black = 25000, Gold = 28000, White = 30000 }
/* Using line below the console result will be 0, because Black value is cero as defaul when it hasn't an assigned value */
//enum MobilePrice {Black, Gold, White}
/* Using line below White value will be 30001, because it should take as value the next number from the previous enum */
//enum MobilePrice {Black, Gold=30000, White}

// functon to calculate final amount
function calculateAmount(price: number): number {
    let discount: number;
    let totalAmount: number;
    if (price === MobilePrice.Gold) {
        discount = 5;
    } else if (price === MobilePrice.White) {
        discount = 8;
    } else {
        discount = 10;
    }
    totalAmount = price - price * discount / 100;
    return totalAmount;
}

// lines to populate the Actual and Final price of Black color Mobile
console.log('Actual price of the Mobile is ' + MobilePrice.Black);
console.log('The final price after discount is ' + calculateAmount(MobilePrice.Black));