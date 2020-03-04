// Declaring variables with basic types using let

let productId: number = 1045; // Declaring a numeric variable

let productDescription: string = '16GB, Gold'; // Declaring a string variable

let productName: string = 'Samsung Galaxy J7';
// let productName: number = 'Samsung Galaxy J7'; no compile because the value is string and the assigned type is number

let productAvailable: boolean = true;   // Declaring a boolean variable

console.log('The type of productId is ' + typeof productId);

console.log('The type of productAvailable is ' + typeof productAvailable);

console.log('The type of productName is ' + typeof productName);

// Declaring variables using const

const discountPercentage: number = 15;
// discountPercentage = 30; error, cannot reassign value because it's a constant

console.log('Discount percentage is:' + discountPercentage);