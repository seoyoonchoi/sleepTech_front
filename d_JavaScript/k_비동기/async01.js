//? 비동기 프로그래밍 활용
console.log('===동기구현===');
function work(){
  const start = Date.now();
  for(let i = 0; i<9999999999; i++){

  }
  const end = Date.now();
  console.log(end-start+'ms');
}
work();
console.log('완료후')

//2) 비동기 프로그래밍
console.log('=비동기구현=');
function asyncWork(){
  setTimeout(() => {
    const start = Date.now();
    for(let i = 0; i<9999999999; i++){}
    const end = Date.now();
    console.log(end-start+'ms');
  },0);

  //setTimeout()은 비동기 함수
  //백그라운드에서 작업이 수행된다
  //기존의 코드 흐름을 방해하지 않는다

}

console.log('비동기 시작');
asyncWork();
console.log('비동기 완료');

function callbackWork(callback){
  setTimeout(() => {
    const start = Date.now();
    for(let i = 0; i<9999999999; i++){}
    const end = Date.now();
    console.log(end-start+'ms');

  },0);
  callback();
}

function afterwork(){
  console.log('작업이 완료되었습니다');
}

console.log('1. 작업을 시작합니다.');
callbackWork(afterwork);
console.log('2. 시간이 오래 걸리는 작업을 기다리지 않습니다');

