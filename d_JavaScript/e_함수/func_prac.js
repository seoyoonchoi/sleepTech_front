function calculatePay(hours,rate){

  let sumPay = rate*hours
  if(hours>160){
    sumPay = sumPay+(hours-160)*rate*0.5;
  }
  return sumPay;
}

console.log(calculatePay(172,20));
console.log(calculatePay(152,30));
console.log(calculatePay(102,18));

