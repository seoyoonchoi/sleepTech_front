{
  interface IUser{
    id: number;
    name: string;
    username: string;
    email: string;
  }

  //전체 사용자 관리하는 배열
  type Users = IUser[];

  //#비동기적으로 사용자 데이터를 가져오는 함수
  //@params

  const fetchUsers = async (page: number, limit: number = 3) => {

    try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`);
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      const users: Users = await response.json();
      return users;

    }catch(error){

      console.error('Fetcherror: ',error);
      return[];
    }
  };

  const createUserCard = (user: IUser):HTMLElement => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';

    userCard.innerHTML = `
    <h2>${username}</h2>
    <p><strong>Username: </strong>${user.username}</p><p><strong>Email: </strong></p>`;
  }

  



}