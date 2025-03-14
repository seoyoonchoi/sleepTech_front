function add(a,b){
  console.log(a+b);
}

add(3,4);

function introduce(name,age){
  console.log(`${name} is ${age} years old`)
}

introduce ('bergerac',27);
introduce (50, 'bergerac');

function substract(a,b){
  let result = a-b;
  return result;
  console.log('안녕하세요');
}

let outcome = substract(10,7);
console.log(outcome);
console.log(substract(10,7));
console.log(introduce('bergerac',28));

//return이 없는 함수는 실행시 undefined를 반환하며 일반적으로는 즉시 콘솔 출력 시 사용한다,

function square1(x){
  let result = x*x;
  return result;
}

let square2 = function(x){
  return x*x;
}

let square3 = x =>x*x;