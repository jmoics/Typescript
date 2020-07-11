//import { Product, SelectedItem } from "./productUtility"
///<reference path="productUtility.ts" />

let product: ProductUtility.Product = JSON.parse(localStorage.getItem("Product"));
console.log(product.productName);

let selectedItem: ProductUtility.SelectedItem = new ProductUtility.SelectedItem(product.pId, product.productName, product.productPrice.gold);

let selectedItems: Array<ProductUtility.SelectedItem>;
if (localStorage.getItem("SelectedItem") != null) {
    selectedItems = JSON.parse(localStorage.getItem("SelectedItem"));
} else {
    selectedItems = [];
}

//document.getElementById('pPrice').innerHTML = product.productPrice;
if (product.productAvailable) {
    document.getElementById('pAvailable').innerHTML = "Available";
} else {
    document.getElementById('pAvailable').innerHTML = "OutOfStock";
}
document.getElementById('pName').innerHTML = product.productName;
document.getElementById('productDescription').innerHTML = product.productDescription;
document.getElementById('gold').innerHTML = "" + product.productPrice.gold;
document.getElementById('pinkgold').innerHTML = "" + product.productPrice.pink;
document.getElementById('silver').innerHTML = "" + product.productPrice.silver;


function getMobileByColor(color: string, image: any) {
    if (color === 'gold') {
        document.getElementById('pPrice').innerHTML = ""+product.productPrice.gold;
        document.getElementById('pDiscount').innerHTML = ""+15;
        image.src = '../../images/SamsungGalaxy_Gold.jpg'
        selectedItem.productPrice = product.productPrice.gold;
    } else if (color === 'pink') {
        document.getElementById('pPrice').innerHTML = ""+product.productPrice.pink;
        document.getElementById('pDiscount').innerHTML = ""+10;
        image.src = '../../images/SamsungGalaxy_Pink.jpg'
        selectedItem.productPrice = product.productPrice.pink;
    } else {
        document.getElementById('pPrice').innerHTML = ""+product.productPrice.silver;
        document.getElementById('pDiscount').innerHTML = ""+8;
        image.src = '../../images/samsung_edge_silver.jpg'
        selectedItem.productPrice = product.productPrice.silver;
    }
}

function addtoCart() {
    let exists: boolean = false;
    if (selectedItems.length > 0) {
        let prod: ProductUtility.SelectedItem;
        for (prod of selectedItems) {
            if (selectedItem.pId == prod.pId) {
                ProductUtility.addQuantity(prod);
                exists = true;
                localStorage.setItem("SelectedItem",JSON.stringify(selectedItems));
                //return;
            }
        }
        if (!exists) {
            selectedItems.push(selectedItem);
            localStorage.setItem("SelectedItem",JSON.stringify(selectedItems));
        }
    } else {
        selectedItems.push(selectedItem);

        localStorage.setItem("SelectedItem",JSON.stringify(selectedItems));
    }

    window.location.href = "D:\\Learning\\WorkspaceTypescript\\Typescript\\8_Modules&Namespaces\\exercise2\\ProductCart.html";
}
//tsc --outFile productDetail.js productUtility.ts productDetail.ts