/* Arrays is used to store multiple values in a single variable. It's an object to store multiple values in a variable with type annotation */
// 3 forms to declare an array.
var manufacturers = ["Samsung", "Sony", "Apple"];
var manufacturers2 = ["Samsung", "Sony", "Apple"];
var products = ["Samsung", 56821, true];
// An array defined with an especific type doesn't accept data of different type.
/* Javascript has number of useful properties and methods to access or modify the given array, same is supported in typescript,
   To add data, we can use push or the position */
var prods = ["Mobiles", "Tablets"];
prods.push("Television"); //if data hasn't the same type, will produce compilation error.
prods.push("Air Conditioners");
prods[4] = "Television"; //index reference
prods[5] = "Air Conditioners";
console.log(prods);
/* To remove data we can use pop or splice function */
prods.pop(); //it will remove the last element in the array.
prods.splice(0, 2);
console.log(prods);
