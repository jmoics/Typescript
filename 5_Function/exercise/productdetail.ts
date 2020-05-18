let product = JSON.parse(localStorage.getItem("Product"));
console.log(product.productName);

//document.getElementById('pPrice').innerHTML = product.productPrice;
if (product.productAvailable) {
    document.getElementById('pAvailable').innerHTML = "Available";
} else {
    document.getElementById('pAvailable').innerHTML = "OutOfStock";
}
document.getElementById('productDescription').innerHTML = product.productDescription;
document.getElementById('gold').innerHTML = product.productPrice.gold;
document.getElementById('pinkgold').innerHTML = product.productPrice.pink;
document.getElementById('silver').innerHTML = product.productPrice.silver;


function getMobileByColor(color: string) {
    prodName = product.productName;
    if (color === 'gold') {
        document.getElementById('pPrice').innerHTML = ""+product.productPrice.gold;
        document.getElementById('pDiscount').innerHTML = ""+15;
    } else if (color === 'pink') {
        document.getElementById('pPrice').innerHTML = ""+product.productPrice.pink;
        document.getElementById('pDiscount').innerHTML = ""+10;
    } else {
        document.getElementById('pPrice').innerHTML = ""+product.productPrice.silver;
        document.getElementById('pDiscount').innerHTML = ""+8;
    }
}