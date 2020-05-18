/* 1 */
function add(n1:number,n2:number):number{
    let total:number=n1+n2;
    return true;
}
console.log(add(5,2));

/* 2 */
function  add2(num1:number,num2?:number) {
    if(num2){
        return num1+num2;
    }
    return num1;
}
console.log(add2(3,5)+add2(5)+add2(3));