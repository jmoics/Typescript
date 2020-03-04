var pName;
var pPrice;
var pAvailable;
function getName() {
    pName = 'Samsung Galaxy Note 7';
    return pName;
}
function getPrice() {
    pPrice = 5000;
    return pPrice;
}
function getStatus() {
    pAvailable = true;
    if (pAvailable) {
        return 'Available';
    }
    else {
        return 'No Available';
    }
}
document.getElementById("pName").innerHTML = getName();
document.getElementById("pPrice").innerHTML = '' + getPrice();
document.getElementById("pAvailable").innerHTML = getStatus();
