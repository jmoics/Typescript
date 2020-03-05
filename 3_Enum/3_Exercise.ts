enum MobilePrice{gold = 59000,pink = 55000, silver = 60200};
var prodPrice: number;
var prodName: string;
var prodStatus: string;
var prodDisc: number;
var prodImage: string;

function getMobileByColor(color: string, image: any) {
    prodName = 'Samsung Galaxy Note 7';
    if (color === 'gold') {
        prodPrice = MobilePrice.gold;
        prodStatus = 'Available';
        prodDisc = 15;
        prodImage = '../images/SamsungGalaxy_Gold.jpg';
    } else if (color === 'pink') {
        prodPrice = MobilePrice.pink;
        prodStatus = 'Unavailable';
        prodDisc = 10;
        prodImage = '../images/SamsungGalaxy_Pink.jpg';
    } else {
        prodPrice = MobilePrice.silver;
        prodStatus = 'Available';
        prodDisc = 8;
        prodImage = '../images/samsung_edge_silver.jpg';
    }

    document.getElementById('pPrice').innerHTML = ""+prodPrice;
    document.getElementById('pAvailable').innerHTML = prodStatus;
    document.getElementById('pDiscount').innerHTML = ""+prodDisc;
    //document.getElementById('phoneImage').src = prodImage;
    image.src = prodImage;
}

document.getElementById('gold').innerHTML = ""+MobilePrice.gold;
document.getElementById('pinkgold').innerHTML = ""+MobilePrice.pink;
document.getElementById('silver').innerHTML = ""+MobilePrice.silver;