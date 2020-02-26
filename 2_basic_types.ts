/* Data type mentions the type of value assigned to a variable. It is used for variable declarations.
   Since TypeScript supports static typing, the data type of the variable can be determined at the compilation time itself.*/
let showImage: boolean = true;
var productPrice: number = 1045; //all typescript numbers are floating point values
var productName: string = "Samsung Galaxy S11"; //strings can be use simple or double quotes.

/* Template strings  are a type of string value that can have multiple lines and embedded expressions. 
They are surrounded by the backquote\backtick (`) character, and embedded expressions of the form ${ expr }. */
let message: string = `The product name is ${productName}`; //Expression in string used to get value of variable productName
let catalog = `The product in catalog are
               TV
               Refrigerator
               Airconditioner
               Geyser`;
console.log(catalog); //Print multiline message in console

/* any type is used to declare a variable whose type can be determined dynamically at runtime with the value supplied to it. */
let screenSize:any; // If no type annotation is mentioned while declaring the variable, any type will be assigned by default.
screenSize = 13.97;
screenSize = "5.5 cm";

/* void type represents undefined as the value. undefined value represents "no value". */
let product:void = undefined; // only can have undefined or null as value
/* it's normally used in functions when we don't want to return anything */
function displayProductDetails() : void {
    console.log("Producto Category is Gadget");
}

/* Type Annotation is a way to enforce type restriction to a specific variable or a function. 
   If a variable is declared with a specific data type and another type of value is assigned to the variable, compilation error will be thrown. */
let productId: number = 134;
productId = "134"; //no compile, string is not assignable to number type variable

function getProductDetails(productId: number): string {
    return "Product ID " + productId;
}

getProductDetails("Mobile"); //no compile
