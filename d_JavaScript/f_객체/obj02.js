let dog = {
  name: {
    last: 'choco',
    first: 'coco'
  },
  age: 3,
  color: 'white',
  favoriteToy['곰인형','탱탱볼'],
  bark: function(){
    console.log('멍멍');
  },

  greet: function(){
    console.log(`Hello, ${this.name.last}`);
  }
}

//1)점표기법
console.log(dog.age);
console.log(dog.name.first);
console.log(dog.favoriteToy[1]);

dog.greet();

//2) 대괄호 표기법
//호출시에는 반드시 ''를 사용하여 문자열을 호출해야 한다.
//객체명['키']: 키값을 문자열로 전달한다
console.log(dog['age']);

//객체 프로퍼티 속성 추가
//객체명. 프로퍼티명 = 값(데이터);

dog.speed = 10;
console.log(dog['speed']);

let num=1;
const PI = 3.14;
function add(a,b){
  return a+b;
}

//nodejs에서는 글로벌(전역)객체
//브라우저 환경에서는 window 객체

//함수 컨텍스트란? 함수 내부의 this

//1)일반 함수의 this
//전역 객체를 의미한다.(전역 컨텍스트와 동일하다.)

const myObject = {
  name: 'object',
  showThis: function(){
    console.log(this);

  }
}

myObject.showThis();

//화살표 함수와 this
const arrowObject = {
  name : 'object',
  showThis: ()=>{
    //화살표 함수가 정의된 객체의 생성 스코프를 this 가 가져온다
    console.log(this);
  }
}

arrowObject.showThis();

//!객체 내부의 this
/*선언적 함수, 함수 표현식 vs  화살표 함수의 this 바인딩이 다름
>>>현재의 객체갑을 활용하기 위함이기 때문에  */