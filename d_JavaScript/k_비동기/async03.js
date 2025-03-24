const myPromise = new Promise((resolve, reject) => {
  const condition = true;

  if(condition){
    resolve('promise succeed');
  }else{
    reject('promise failed');
  }
}) ;

//! 프로미스 메서드 사용
//cf 메서드 체이닝 방식 사용
myPromise
  .then((result) => {
  console.log(result);
  return 'next need Data';
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('무조건 실행');
  });
  
    
//!프로미스 예시
function fetchData(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => resolve ('Data succeed'), 3000);
  });
}

//데이터 처리하기

function processData(data){
  return new Promise((resolve, reject) =>{
    setTimeout(() => resolve (`${data} 사용하기기`), 3000);
  });
}

fetchData()
  .then(result => processData(result))
  .then(processResult =>console.log(processResult))
  .catch(error => console.error(error));

console.log('메인 로직의 실행(시간이 많이 걸리지 않는 작업)');