/* Tuple is a kind of array which accepts more than one predefined data type.

   Let us consider an example, where customerCreditId, Customer object and customerCreditLimit has to be represented in a data type. 
   The choice could be to define a class, with these properties. If it is represented using the class, 
   then there will be a requirement to instantiate the class and then the properties can be accessed. 
   
   Tuples provides an easy way to implement the same scenario with an array like data structure, which is easy to access and manipulate. */
var customerCreditInfo: [string, Customer, number];
customerCreditInfo = ["I3129", new Customer("I3129"), 3000];


let productAvailable: [string, boolean];
productAvailable = ["Samsung Galaxy S7", true];
//productAvailable = ["Samsung Galaxy S7", false, "Samsung Galaxy J7", false]; //only one entry can be initialized as per Typescript data restriction lenght policy.
productAvailable = [{"Samsung Galaxy S7", false}, {"Samsung Galaxy J7", false}]; //it is not possible too
productAvailable.push("Samsung Galaxy J7", false);
productAvailable.push(false, "Samsung Galaxy S8"); //the order is not important
productAvailable.push(false, "Samsung Galaxy J8", false, "Samsung Galaxy J9");

console.log(productAvailable);
