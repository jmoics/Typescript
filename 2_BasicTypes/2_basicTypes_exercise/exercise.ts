var mobileName: string;
var mobilePrice: number;
var mobileStatus: boolean;

function getName() : string {
    mobileName = 'Samsung Galaxy Note 7';
    return mobileName;
}
function getPrice(): number {
    mobilePrice = 5000;
    return mobilePrice;
}
function getStatus(): string {
    mobileStatus = true;
    if (mobileStatus) {
        return 'Available';
    } else {
        return 'No Available';
    }
}

document.getElementById("pName").innerHTML = getName();
document.getElementById("pPrice").innerHTML = ''+getPrice();
document.getElementById("pAvailable").innerHTML = getStatus();