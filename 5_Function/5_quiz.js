function add2(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
console.log(add2(3, 5) + add2(5) + add2(3));
