function fetchPromiseUserData(){
  try{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if(!response.ok){
          throw new Error(`HTTP: error status ${response.status}`);
        }
        return response.json();

      })
      .then(users =>{
        users.forEach(element => console.log(element));
      })
  }catch(error){
    console.log(error);
  }

}

console.log('promise로 데이터 ㅓ리하기');
fetchPromiseUserData();

//!Async Await
async function fetchAsyncPostsData(){
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if(!response.ok){
      throw new Error(`HTTP error : status: ${response.status}`);

    }
    const posts = await response.json();
    posts.forEach(post =>console.log(post));
  }catch(e){
    console.error(`게시물 가져오기 실패 ${e.message}`);
  }
}

console.log('async Await로 데이터 가져오기');
fetchAsyncPostsData();