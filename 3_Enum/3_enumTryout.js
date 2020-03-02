// declaring enum variable and assigning default values
var MobilePrice;
(function (MobilePrice) {
    MobilePrice[MobilePrice["Black"] = 25000] = "Black";
    MobilePrice[MobilePrice["Gold"] = 28000] = "Gold";
    MobilePrice[MobilePrice["White"] = 30000] = "White";
})(MobilePrice || (MobilePrice = {}));
// functon to calculate final amount
function calculateAmount(price) {
    var discount;
    var totalAmount;
    if (price === MobilePrice.Gold) {
        discount = 5;
    }
    else if (price === MobilePrice.White) {
        discount = 8;
    }
    else {
        discount = 10;
    }
    totalAmount = price - price * discount / 100;
    return totalAmount;
}
// lines to populate the Actual and Final price of Black color Mobile
console.log('Actual price of the Mobile is ' + MobilePrice.Black);
console.log('The final price after discount is ' + calculateAmount(MobilePrice.Black));
