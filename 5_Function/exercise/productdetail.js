var product = JSON.parse(localStorage.getItem("Product"));
console.log(product.productName);
//document.getElementById('pPrice').innerHTML = product.productPrice;
if (product.productAvailable) {
    document.getElementById('pAvailable').innerHTML = "Available";
}
else {
    document.getElementById('pAvailable').innerHTML = "OutOfStock";
}
document.getElementById('pName').innerHTML = product.productName;
document.getElementById('productDescription').innerHTML = product.productDescription;
document.getElementById('gold').innerHTML = product.productPrice.gold;
document.getElementById('pinkgold').innerHTML = product.productPrice.pink;
document.getElementById('silver').innerHTML = product.productPrice.silver;
function getMobileByColor(color, image) {
    if (color === 'gold') {
        document.getElementById('pPrice').innerHTML = "" + product.productPrice.gold;
        document.getElementById('pDiscount').innerHTML = "" + 15;
        image.src = '../../images/SamsungGalaxy_Gold.jpg';
    }
    else if (color === 'pink') {
        document.getElementById('pPrice').innerHTML = "" + product.productPrice.pink;
        document.getElementById('pDiscount').innerHTML = "" + 10;
        image.src = '../../images/SamsungGalaxy_Pink.jpg';
    }
    else {
        document.getElementById('pPrice').innerHTML = "" + product.productPrice.silver;
        document.getElementById('pDiscount').innerHTML = "" + 8;
        image.src = '../../images/samsung_edge_silver.jpg';
    }
}
