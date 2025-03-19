let num = 123.4567;
console.log(num.toFixed(3));
console.log(num.toFixed(1));
console.log(num.toFixed());

//2) isNaN(), isFinite()
//각각 NaN값, Infinity 값인지 확인
// - Number 객체에서 호출

let notNum = Number('숫자로 변환할 수 없는 값');
console.log(notNum);
console.log(notNum ===NaN);
console.log(Number.isNaN(notNum));


