namespace ProductUtility {
    export interface Product {
        pId: number;
        productName: string;
        productPrice: {gold: number, pink: number, silver: number};
        productAvailable: boolean;
        imageUrl: string;
        productDescription: string;
    } 
}