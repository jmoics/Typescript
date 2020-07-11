var SelectedItem = /** @class */ (function () {
    function SelectedItem(pId, productName, productPrice) {
        this.pId = pId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.quantity = 1;
        this.totalPrice = productPrice * this.quantity;
    }
    SelectedItem.prototype.addQuantity = function () {
        this.quantity = this.quantity + 1;
        this.totalPrice = this.quantity * this.productPrice;
    };
    return SelectedItem;
}());
export { SelectedItem };
