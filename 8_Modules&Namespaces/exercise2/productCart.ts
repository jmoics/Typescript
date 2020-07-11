//import { Product, SelectedItem } from "./productUtility"
///<reference path="productUtility.ts" />

let selectedItems: Array<ProductUtility.SelectedItem> = JSON.parse(localStorage.getItem("SelectedItem"));

function pageOnload() {
    console.log(selectedItems);

    for (const sel of selectedItems) {
        addRow(sel);
    }
}

function backProduct() {
    window.location.href = "D:\\Learning\\WorkspaceTypescript\\Typescript\\8_Modules&Namespaces\\exercise2\\HomePage.html";
}

function addRow(sel: ProductUtility.SelectedItem) {
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

//tsc --outFile productCart.js productUtility.ts productCart.ts