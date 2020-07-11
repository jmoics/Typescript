/* Type Aliases es un nombre personalizado o escrito a mano que se proporciona a un tipo de datos existente de Typecript. 
 * Los nombres de alias se pueden usar para varios tipos, incluidos simples, unión, tupla u otros tipos primitivos existentes. Esta característica hace que la declaración sea clara y fácil.
 * Aprendamos los alias de tipo en detalle.
 */

/* The developer would have declared some variables using simple, union or intersection data types which is no longer available in the current Typescript definition. Due to this issue developer needs to modify the previously declared definition at respective places to dynamically check the type of data passed to that variable.
 * Let us consider the developer need to declare a variable named pCount (productCount) of a Product object. This variable should have the feasibility to hold a number, a string or undefined data type based on the requirement.
 * To achieve this requirement union types can be used while declaring this variable as shown below.
 */

let pCount: number | string | undefined = 10;
/* In the above example, union types have been used to define a pCount variable which can hold three different data types (number/string/undefined).
 * When we use this data in many places of our code, to enforce type checking repeating this long definition may affect the readability and maintainability.
 */
// For example:
function getProductDetail(pName: string, pCount: number | string | undefined){
    console.log(`Name: ${pName} ; Count: ${pCount}`)
}
let pName: string = "SamsungGalaxy J7"
let pCount: number | string | undefined = 10;
getProductDetail(pName, pCount);

/* Developer can simplify this definition by adding type which gives the same exact definition with a customized name and skim the code using type in Typescript.
 * Let us understand about type.
 */




/* Type aliases help us to have a meaningful name for existing data type aligned with the purpose of variable. It confirms the new name interprets the same declaration. */
type MeaningfulName = < an existing Typescript type>

/* Let us try to create a type to define the pCount parameter of getProductDetail function. */
type ProdCountType = number | string | undefined;
function getProductDetail(pName: string, pCount: ProdCountType){
    console.log(`Name: ${pName} ; Count: ${pCount}`)
}
getProductDetail("SamsungGalaxy10", 2);
getProductDetail("LenovoNote3", "No stock!");
getProductDetail("Redmi5", undefined);

/* Thus, type adds a custom name according to the usage of data type for a specific variable. We can make use of types for simple, union, function, arrays and objects types of data.
 * Let us explore on them more in detail. */




/* How to create Type Alias? : Simple & Union Types */
/* Let us explore How to Create type aliases for different constructs.
 * Simple Types:
 * The Developer can add a custom name for the simple data type.
 * In the below code the ProductIdNum variable can accept only a number data type only. Type has been used to add a custom name.
 */
type ProductIdNum = number;
function getProduct(id: ProductIdNum) {
    console.log(`Product found for id ${id}`)
}
getProduct(1002);
getProduct(null); // Error: argument type is not a number

/* Union Types:
 * If the developer needs to hold more than one data type, then union types can be used for this requirement.
 * In the below code, the ProdCountType can hold a number, string or undefined values.
 */
type ProdCountType = number | string | undefined;
function getProductDetail(pName: string, pCount: ProdCountType){
    console.log(`Name: ${pName} ; Count: ${pCount}`)
}
getProductDetail("SamsungGalaxy10", 2);
getProductDetail("LenovoNote3", "No stock!");
getProductDetail("Redmi5", undefined);





/* How to create Type Alias? : Function & Object Types */
/* Function Types:
 * If the developer needs to define a name for a function definition, then Function types can be used.
 * In the below code a function (PromoCodeGenerator) is defined with a set of parameters and return type to specify a type.
 */
type PromoCodeGenerator = (pName: string, pId: number) => string;
let generator: PromoCodeGenerator = function (pName: string, pId: number): string {
    return pName.substr(0, 4).toLocaleUpperCase() + pId;
}
let offer = generator("Lenovo 3", 1002);
console.log(`Please use the Promocode: ${offer}`)

/* Object Types:
 * Object types help the developer to enforce Type Checking on the object without interfaces. This feature benefits developers in writing interface independent object type.
 * For example:
 */
type ProductStatusObject = { pId: string, availablity: boolean }
function checkProductAvailablity(product: ProductStatusObject) {
    if (product.availablity == true) {
        console.log(`${product.pId} is available`);
    }
    else {
          console.log(`${product.pId} is not available`);
    }
}
let product1 : ProductStatusObject = {pId: "LENOVO9089", availablity: true}
checkProductAvailablity(product1);
let product2 : ProductStatusObject = { availablity: false, pId: "SAMSUN8811"}
checkProductAvailablity(product2);





/* How to create Type Alias? : Array , Generic Types & Type Literals* /
/* Array Types:
 * It helps developers to create an array of dissimilar records.
 * In the below code an array (AvailabiltyArray) is created for checking the availability of the product.
 */
type ProductStatusObject = { pId: string, availablity: boolean }
type AvailabiltyArray = [ ProductStatusObject ]
let product1: ProductStatusObject = { pId: "LENOV9912", availablity: true  };
let product2: ProductStatusObject = { pId: "REDMI8878", availablity: false };
let product3: ProductStatusObject = { pId: "SAMSU5633", availablity: false }
let product4: ProductStatusObject = { pId: "OPPO1128",availablity: true}
let products: AvailabiltyArray = [product1];
products.push(product2,product3, product4);
let availableProducts = products.filter( (product) => product.availablity)
console.log(availableProducts)

/* Generic Types:
 * The developer can also work with generic types that have type alias name.
 * In the below example ProductCatelog is created to work with different types of product category code.
 */
type ProductCatelog<T> = { pCategoryCode: T, availableProducts: Array<T> }
function availableProducts<T>(pCatelog : ProductCatelog<T>) {
console.log(`Products on category code ${pCatelog.pCategoryCode} :
            ${(pCatelog.availableProducts)}`)
}
//ProductCatelog by code number
let productByCodeNumber: ProductCatelog<number>;
productByCodeNumber = {pCategoryCode : 12321, availableProducts :[4566,7788,9090]}
availableProducts(productByCodeNumber)
//ProductCatelog by code string
let productByCodeString: ProductCatelog<string>;
productByCodeString = {pCategoryCode : "PCC2020",
 availableProducts :["Pr4566","Pr7788","Pr9090"]}
availableProducts(productByCodeString)

/* Type Literals:
 * Literals helps developers to create possible static values as the data to a variable.
 * In the below example ratings is defined with possible union types.
 */
type ratings = "Good" | "Average" | "Excellent" | 0;
let customerFeedback1: ratings = "Good";
let customerFeedback2: ratings = 0;
let customerFeedback3: ratings = "Not bad"; 
// Error: Could not find literal value match.



/* Interfaces
In Typescript, interfaces focus on the Type Checking feature. It defines and shapes a construct
It allows optional, readOnly properties
It allows callable and static properties
Interfaces can be extended by other Interfaces and Type Aliases

Ex: interface Result extends score, Grade{
}
It can be implemented by a class
Interface addresses declaration merging

 */
/* Type Aliases
Type Aliases is a custom or hand-written name provided to an existing data type of Typescript
It allows optional, readOnly properties
It allows callable and static properties
Type Aliases cannot be extended by other Interfaces and Type Aliases.

Intersections will help in Type Aliases to do extending

Ex: type Result = Score & Grade
It can be implemented by a class and extended by an Interface.
Type Aliases do not address declaration merging


 */