export const tmp = '';
function syncFunc01(){
  let sum = 0;
  for (let i = 0; i < 999999999; i++) {
    sum +=i;
  }
  return sum;
}

function syncFunc02(){
  let sum = 0;
  for (let i = 0; i < 100; i++) {
    sum +=i;
  }
  return sum;
}

function example(){
  console.log('첫번째 작업 시작');
  let result1 = syncFunc01();
  console.log(`첫번째 작업 완료 ${result1}`);
  console.log('두번째 작업 시작');
  let result2 = syncFunc02();
  console.log(`두번째 작업 완료 ${result2}`);
}