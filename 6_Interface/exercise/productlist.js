var products = [{
        pId: 432,
        productName: "Samsung Galaxy Note 7",
        productPrice: { gold: 2200, pink: 2300, silver: 2250 },
        productAvailable: true,
        imageUrl: "../image/SamsungGalaxy_Gold.jpg",
        productDescription: "Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory."
    },
    {
        pId: 433,
        productName: "Samsung Galaxy S6 Edge",
        productPrice: { gold: 1800, pink: 1850, silver: 1900 },
        productAvailable: true,
        imageUrl: "../image/SamsungGalaxy_Pink.jpg",
        productDescription: "Samsung Galaxy S6 Edge is a stylish mobile you can ever have. It has 128GB memory."
    },
    {
        pId: 434,
        productName: "Nokia Lumia 640XL",
        productPrice: { gold: 1200, pink: 1220, silver: 1250 },
        productAvailable: false,
        imageUrl: "../image/lumia_640xl.jpg",
        productDescription: "Nokia Lumia 640XL is a stylish mobile you can ever have. It has 32GB memory."
    }];
var filteredList;
function getMobileDetails(productId, productName) {
    filteredList = products.filter(function (product) { return product.pId === productId; });
    localStorage.setItem("Product", JSON.stringify(filteredList[0]));
    window.location.href = "D:\\Learning\\WorkspaceTypescript\\Typescript\\5_Function\\exercise\\ProductDetail.html";
}
