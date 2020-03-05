// declaring a Tuple
var productAvailable;
var productName;
var availability;
// assigning value to Tuple
productAvailable = ['Samsung Galaxy J7', true];
// Adding new value to Tuple
productAvailable.push('Samsung Galaxy J5', false);
productAvailable.push(false, "Samsung Galaxy S5"); //it works too
// logic to check product availability based on datatype of declared Tuple variable
for (var _i = 0, productAvailable_1 = productAvailable; _i < productAvailable_1.length; _i++) {
    var item = productAvailable_1[_i];
    console.log("item = " + item);
    if (typeof item === 'string') {
        productName = item;
    }
    else if (typeof item === 'boolean') {
        availability = item;
        if (availability === true) {
            console.log("The product " + productName + " is available");
        }
        else if (availability === false) {
            console.log("The product " + productName + " is not available");
        }
    }
}
