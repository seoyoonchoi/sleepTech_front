const numbers = [23,41,29,19,7,36];
numbers.forEach(function(value,index){
  console.log(`${index+1}번째 요소 : ${value}`);
});

console.log(numbers);
const newnumbers = numbers.map(function(value){
  let square = value*value;
  return square
});

console.log(newnumbers);

const newArrowNum = numbers.map(value => value*value);
console.log(newArrowNum);

const basicArray = [0,1,2,3,4,5,6];
const evenNumbers = basicArray.filter(value =>value%2 ===0);
const evenNumbers2 = basicArray.filter(function(value){return value%2 ===0;});

console.log(`원래배열 ${basicArray}`);
console.log(`짝수배열 ${evenNumbers}`);

let cars = ['audi', 'bmw', 'volvo','hyundai'];

cars.forEach(car=>console.log(car));
let carUpperCase = cars.map(function(car){
  return car.toUpperCase();
});

//메서드 체이닝?
/*메서드를 연속적으로 호출하는 프로그래밍 패턴
>어떤 메서드가 반환하는 값을 기반으로 또 다른 메서드를 줄줄히 사용하는 것 */

let numbersArray = [0,1,2,3,4,5,6,7,8,9];
let evenNumbersArray = numbersArray.filter(a =>a%2 ===0).map(a=>a*a).forEach(a=>console.log(a));