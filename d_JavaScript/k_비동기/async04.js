async function fetchUserData(){
  let data = await fetch('https://api.example.com/data');
  let jsonData = await data.jason();
  console.log(jsonData);
}

async function fetchCustomerData(){
  try{
    let data = await fetch('url');
    if(!data.ok){
      throw new Error('네트워크 응답이 실패되어 데이터를 정상적으로 가져오지 못하였습니다');
    }
    let jsonData = await data.json();
    console.log(jsonData);
  }catch(error){
    console.error(error.message);

  }
}

fetchCustomerData();

