const productList: Array<any> = [{
    pId: 432, 
    productName: "Samsung Galaxy Note 7", 
    productPrice: 600, 
    productAvailable: true, 
    imageUrl: "../image/SamsungGalaxy_Gold.jpg",
    productDescription: "Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory."
},
{
    pId: 433, 
    productName: "Samsung Galaxy S6 Edge", 
    productPrice: 500, 
    productAvailable: false, 
    imageUrl: "../image/SamsungGalaxy_Pink.jpg",
    productDescription: "Samsung Galaxy S6 Edge is a stylish mobile you can ever have. It has 128GB memory."
},
{
    pId: 434, 
    productName: "Nokia Lumia 640XL", 
    productPrice: 300, 
    productAvailable: true, 
    imageUrl: "../image/lumia_640xl.jpg",
    productDescription: "Nokia Lumia 640XL is a stylish mobile you can ever have. It has 32GB memory."
}];

for (let cont = 0; cont < productList.length; cont++) {
    document.getElementById("pName" + cont).innerHTML = productList[cont].productName;
    document.getElementById("pPrice" + cont).innerHTML = productList[cont].productPrice;
    if (productList[cont].productAvailable) {
        document.getElementById("pAvailable" + cont).innerHTML = "Available";
    } else {
        document.getElementById("pAvailable" + cont).innerHTML = "OutOfStock";
    }
}