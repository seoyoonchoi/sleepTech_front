const fetchButton = document.getElementById('fetchUserData');
//null이 있을 수 있다. 지정한 선택자가 해당 문서에 존재하지 않을 경우 null 값을 반환한다
fetchButton?.addEventListener('click', async() => {
  //!DOM요소 갖고오기
  const userDataDiv = document.getElementById('userData');
  const userIdElement = document.getElementById('userId') as HTMLInputElement;
  const userId = userIdElement ? userIdElement.value : '';
  const apiUrl = `http://jsonplaceholder.typicode.com/users/${userId}`;

  if(userDataDiv){
    userDataDiv.innerHTML = `<p>Loading user data</p>`;
    try{
      const fetchResponse = await fetch(apiUrl);
      if(!fetchResponse.ok){
        throw new Error('사용자 데이터에 접근할 수 없스니다');
      }
      const user = await fetchResponse.json();
      userDataDiv.innerHTML = `
      <h2>User Details</h2>
      <p>Id: ${user.id}</p>
      <p>Name: ${user.name}</p>
      <p>Email: ${user.email}</p>
      <p>Address: ${user.address.street}</p>


      `;

    }catch(error){
      userDataDiv.innerHTML = `<p>${error}</p>`;
    }
  }

});