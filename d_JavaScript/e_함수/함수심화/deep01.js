function funcType(){}
console.log(typeof funcType);

function print(index)
console.log(`${index}번째 함수 호출`);

function callback1(callbackFunc){


}
callback1(print);

const print2 = function(count){
  console.log(`${count}번째 함수 호출`);
}

callback1(print2);

function callback2(number, callbackFunc,otherFunc){
  if(number%2===0){
    callbackFunc(number);
  }else{otherFunc(number)};
}

const even = even => console.log(`${even}값은 짝수입니다.`);
const oddNumber = oddNum => console.log(`${oddNum} 값은 홀수입니다`);
