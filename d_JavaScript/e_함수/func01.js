function sum(a,b){
  return a+b;
}

let result = sum(1,2);
console.log(result);

let result2 = sum('벨','쥐락');
console.log(result2);
console.log("");

// let button1 = document.querySelector('.button');
// let button2 = document.querySelector('.button');
// //버튼이라는 키워드가 있니?

// function message(){
//   console.log('버튼이 클릭되었습니다.');
// }

// button1.addEventListener('click',message);
// //button 요소에 클릭 이벤트 발생 시 message의 기능을 적용할 수 있다.
// button2.addEventListener('click',message);

// function greet1(){
//   console.log('안뇽하세욤!');
// }

// console.log(greet1);
// greet1();


// const greet2=function(){
//   console.log('I am bergerac');
// }

// greet2();

let greet3 = () => {
  console.log('화살표함수');
}

greet3();

const greet4 = name => console.log(`안녕하세요. ${name}님`);
greet4(`bergerac`);

let username = 'bergerac';
function lsa(){
  let job = 'developer';
  console.log(`${username}'s job is ${job}`);
}

lsa();
console.log(username);
console.log(job);

