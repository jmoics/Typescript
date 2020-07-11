var ProductUtility;
(function (ProductUtility) {
    var SelectedItem = /** @class */ (function () {
        function SelectedItem(pId, productName, productPrice) {
            this.pId = pId;
            this.productName = productName;
            this.productPrice = productPrice;
            this.quantity = 1;
            this.totalPrice = productPrice * this.quantity;
        }
        return SelectedItem;
    }());
    ProductUtility.SelectedItem = SelectedItem;
    function addQuantity(sel) {
        sel.quantity = sel.quantity + 1;
        sel.totalPrice = sel.quantity * sel.productPrice;
    }
    ProductUtility.addQuantity = addQuantity;
})(ProductUtility || (ProductUtility = {}));
// export { Product, SelectedItem }
// import { Product } from "./productUtility"
///<reference path="productUtility.ts" />
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
    window.location.href = "D:\\Learning\\WorkspaceTypescript\\Typescript\\8_Modules&Namespaces\\exercise2\\ProductDetail.html";
}
//tsc productList.ts --module ES2015
