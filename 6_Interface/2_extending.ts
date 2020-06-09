interface Category {
    categoryName: string;
}

interface Product {
    productName: string;
    productId: number;
}

interface ProductList extends Category, Product {
    list: Array<string>;
}

// declarando variable de tipo ProductList
const productDetails: ProductList = {
    categoryName: 'Gadget',
    productName: 'Mobile',
    productId: 1234,
    list: ['Samsung', 'Motorola', 'LG']
};

// asignando la lista de productDetails en otra variable
const listProduct = productDetails.list;

// asignando el valor productName de la variable productDetails en otra variable
const pname: string = productDetails.productName;

// line to populate Product name
console.log('Product Name is ' + pname);

// line to populate Product list
console.log('Product List is ' + listProduct);