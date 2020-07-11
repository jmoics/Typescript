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
//import { Product, SelectedItem } from "./productUtility"
///<reference path="productUtility.ts" />
var product = JSON.parse(localStorage.getItem("Product"));
console.log(product.productName);
var selectedItem = new ProductUtility.SelectedItem(product.pId, product.productName, product.productPrice.gold);
var selectedItems;
if (localStorage.getItem("SelectedItem") != null) {
    selectedItems = JSON.parse(localStorage.getItem("SelectedItem"));
}
else {
    selectedItems = [];
}
//document.getElementById('pPrice').innerHTML = product.productPrice;
if (product.productAvailable) {
    document.getElementById('pAvailable').innerHTML = "Available";
}
else {
    document.getElementById('pAvailable').innerHTML = "OutOfStock";
}
document.getElementById('pName').innerHTML = product.productName;
document.getElementById('productDescription').innerHTML = product.productDescription;
document.getElementById('gold').innerHTML = "" + product.productPrice.gold;
document.getElementById('pinkgold').innerHTML = "" + product.productPrice.pink;
document.getElementById('silver').innerHTML = "" + product.productPrice.silver;
function getMobileByColor(color, image) {
    if (color === 'gold') {
        document.getElementById('pPrice').innerHTML = "" + product.productPrice.gold;
        document.getElementById('pDiscount').innerHTML = "" + 15;
        image.src = '../../images/SamsungGalaxy_Gold.jpg';
        selectedItem.productPrice = product.productPrice.gold;
    }
    else if (color === 'pink') {
        document.getElementById('pPrice').innerHTML = "" + product.productPrice.pink;
        document.getElementById('pDiscount').innerHTML = "" + 10;
        image.src = '../../images/SamsungGalaxy_Pink.jpg';
        selectedItem.productPrice = product.productPrice.pink;
    }
    else {
        document.getElementById('pPrice').innerHTML = "" + product.productPrice.silver;
        document.getElementById('pDiscount').innerHTML = "" + 8;
        image.src = '../../images/samsung_edge_silver.jpg';
        selectedItem.productPrice = product.productPrice.silver;
    }
}
function addtoCart() {
    var exists = false;
    if (selectedItems.length > 0) {
        var prod = void 0;
        for (var _i = 0, selectedItems_1 = selectedItems; _i < selectedItems_1.length; _i++) {
            prod = selectedItems_1[_i];
            if (selectedItem.pId == prod.pId) {
                ProductUtility.addQuantity(prod);
                exists = true;
                localStorage.setItem("SelectedItem", JSON.stringify(selectedItems));
                //return;
            }
        }
        if (!exists) {
            selectedItems.push(selectedItem);
            localStorage.setItem("SelectedItem", JSON.stringify(selectedItems));
        }
    }
    else {
        selectedItems.push(selectedItem);
        localStorage.setItem("SelectedItem", JSON.stringify(selectedItems));
    }
    window.location.href = "D:\\Learning\\WorkspaceTypescript\\Typescript\\8_Modules&Namespaces\\exercise2\\ProductCart.html";
}
