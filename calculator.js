   function newSub(num){
    console.log(num);
    let sub = 0;
    for(i = 0;i< num.length;i++){
        sub = sub - num[i];
    }
console.log('enter the number',sub);
}
function newSum(num){
    console.log(num);
    let sum = 0;
    for(i = 0;i< num.length;i++){
        sum = sum + num[i];
    }
console.log('enter the number',sum); 
}
function newMul(num){
    console.log(num);
    let mul = 0;
    for(i = 0;i< num.length;i++){
        mul = mul * num[i];
    }
console.log('enter the number',mul); 
}
function newDiv(num){
    console.log(num);
    let div = 0;
    for(i = 0;i< num.length;i++){
        div = div + num[i];
    }
console.log('enter the number',div); 
}
newSub([1,2]);
newSum([1,2]);
newMul([1,2]);
newDiv([1,2]);



