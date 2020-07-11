namespace ProductUtility {
    export interface Product {
        pId: number;
        productName: string;
        productPrice: {gold: number, pink: number, silver: number};
        productAvailable: boolean;
        imageUrl: string;
        productDescription: string;
    }

    export class SelectedItem {
        pId: number;
        productName: string;
        productPrice: number;
        quantity: number;
        totalPrice: number;

        constructor(pId, productName, productPrice) {
            this.pId = pId;
            this.productName = productName;
            this.productPrice = productPrice;
            this.quantity = 1;
            this.totalPrice = productPrice * this.quantity;
        }
    }

    export function addQuantity(sel: SelectedItem): void {
        sel.quantity = sel.quantity + 1;
        sel.totalPrice = sel.quantity * sel.productPrice;
    }
}
// export { Product, SelectedItem }