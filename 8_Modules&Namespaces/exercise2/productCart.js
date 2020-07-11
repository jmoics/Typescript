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
var selectedItems = JSON.parse(localStorage.getItem("SelectedItem"));
function pageOnload() {
    console.log(selectedItems);
    for (var _i = 0, selectedItems_1 = selectedItems; _i < selectedItems_1.length; _i++) {
        var sel = selectedItems_1[_i];
        addRow(sel);
    }
}
function backProduct() {
    window.location.href = "D:\\Learning\\WorkspaceTypescript\\Typescript\\8_Modules&Namespaces\\exercise2\\HomePage.html";
}
function addRow(sel) {
    var body = document.getElementById('cartBody');
    body.innerHTML = body.innerHTML + "<tr><td>" + sel.productName + "</td><td>" + sel.quantity + "</td><td>" + sel.productPrice + "</td><td>" + sel.totalPrice + "</tr>";
    /*row = body.insertRow();
    cell = row.insertCell();
    cell.innerHTML = sel.productName;
    cell = row.insertCell();
    cell.innerHTML = sel.quantity;
    cell = row.insertCell();
    cell.innerHTML = sel.productPrice;
    cell = row.insertCell();
    cell.innerHTML = sel.totalPrice;*/
}
