function greet(name){
  console.log(`Hello, ${name}`);

}

function getUserInput (callback){
  let name = prompt('put your name');
  callback(name);
}

getUserInput(greet);

function fetchUserData(userId, callback){
  // 시간에 대한 소요는 setTimeout() 함수를 사용하여 구현한다
  setTimeout(() => {
    const userData = {
      //가상의 사용자 데이터
      id : userId,
      name : 'bergerac',
      email : 'bergeracKo9411'
    };
    callback(userData);

  },3000 );
}

//사용자 데이터 처리함수(콜백함수)
function handleUserData(user, callback){
  console.log(`User Data: ${user.name}`);
  callback();
}

fetchUserData(1, handleUserData);

console.log('비동기적인 출력');

function a(){
  console.log('a');
  function b() {
    console.log('b');
    function c() {
      console.log('c');
    }
  }
}

a();