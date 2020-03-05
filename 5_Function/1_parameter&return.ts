/* We can define parameter types and return types, and if that definitions are not satisfied in a function call it doesn't compile */
function getProductDetails(productId: number): string {
    return "Product ID" + productId;
}

getProductDetails("Mobile"); //no compile because parameter type was defined as number.