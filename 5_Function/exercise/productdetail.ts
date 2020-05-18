let product = JSON.parse(localStorage.getItem("Product"));

document.getElementById('pPrice').innerHTML = product.productPrice;
if (product.productAvailable) {
    document.getElementById('pAvailable').innerHTML = "Available";
} else {
    document.getElementById('pAvailable').innerHTML = "OutOfStock";
}
document.getElementById('productDescription').innerHTML = product.productName;

console.log(product.productName);