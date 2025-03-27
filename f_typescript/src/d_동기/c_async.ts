export const tmp = '';

//!Async&Await
/*프로미스를 기반으로 비동기 작업을 간편하게 작성
async 함수 내에서 await 키워드를 사용하여 비동기 코드를 작성한다
동기 코드와 유사한 형태로 비동기 코드가 작성이 가능하다
*/

async function fetchUserData() {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //Promise객체: 연산 결과에 따라 성공 또는 실패의 상태를 가진다
    //cf)fetch('url'): 해당 url을 통해 서버에 데이터를 요청하고 반환된 응답을 Promise형태로 갖고옴

    if(!response.ok){
      throw new Error('데이터를 갖고오는데 실패하였습니다.')
    }
    const data = await response.json();
    console.log(`가져온 데이터: ${data}`, data);

  }catch(error){
    console.error('데이터 요청 중 오류: ',error);
  }
}

fetchUserData();
console.log('비동기 처리 이후 실행될 로직');

