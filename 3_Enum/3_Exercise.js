var MobilePrice;
(function (MobilePrice) {
    MobilePrice[MobilePrice["gold"] = 59000] = "gold";
    MobilePrice[MobilePrice["pink"] = 55000] = "pink";
    MobilePrice[MobilePrice["silver"] = 60200] = "silver";
})(MobilePrice || (MobilePrice = {}));
;
var prodPrice;
var prodName;
var prodStatus;
var prodDisc;
var prodImage;
function getMobileByColor(color, image) {
    prodName = 'Samsung Galaxy Note 7';
    if (color === 'gold') {
        prodPrice = MobilePrice.gold;
        prodStatus = 'Available';
        prodDisc = 15;
        prodImage = 'images/SamsungGalaxy_Gold.jpg';
    }
    else if (color === 'pink') {
        prodPrice = MobilePrice.pink;
        prodStatus = 'Unavailable';
        prodDisc = 10;
        prodImage = 'images/SamsungGalaxy_Pink.jpg';
    }
    else {
        prodPrice = MobilePrice.silver;
        prodStatus = 'Available';
        prodDisc = 8;
        prodImage = 'images/samsung_edge_silver.jpg';
    }
    document.getElementById('pPrice').innerHTML = "" + prodPrice;
    document.getElementById('pAvailable').innerHTML = prodStatus;
    document.getElementById('pDiscount').innerHTML = "" + prodDisc;
    image.src = prodImage;
}
document.getElementById('gold').innerHTML = "" + MobilePrice.gold;
document.getElementById('pinkgold').innerHTML = "" + MobilePrice.pink;
document.getElementById('silver').innerHTML = "" + MobilePrice.silver;
