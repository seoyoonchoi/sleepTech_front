let cars = ['audi', 'bmw', 'volvo','hyundai'];
let combinedCar = cars.reduce((acc,car)=>{return acc+car+","},"Cars: ");
console.log(combinedCar);
console.log(typeof combinedCar);

let numberArray = [3,1,5,2,7,6];
console.log(numberArray.sort());
console.log(numberArray.reverse());

//2) indexOf(), lastIndexOf() : 특정 요소의 인덱스를 찾는 메서드
//3) find(), findIndex()
//
