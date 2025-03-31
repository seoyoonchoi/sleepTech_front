{
interface IUser{
  id: number;
  name: string;
  username: string;
  email: string;

}

type UsersType = IUser[];

const fetchUsers = async(): Promise<UsersType> => {

  //promise.resolve(value)
  //async 함수는 내부에서 어떤 값을 반환하던 자동으로 promise.resolve(어떤값)로 감싸서 반환시킨다
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!response.ok){
      throw new Error('Network response was not OK');
    }

    const users: UsersType = await response.json();
    return users;

  }catch(error){
    console.error('Fetch error: ', error);
    return [];

  }
}

const createUserCard = (user: IUser): HTMLElement => {
  const userCard = document.createElement('div');
  userCard.className = 'user-card';

  userCard.innerHTML = `
  <h2>${user.name}</h2>
  <p><strong>Username: </strong>${user.username}</p>
  <p><strong>Email: </strong>${user.email}</p>
  `;
  return userCard;
}

const displayUsers = (users: UsersType) => {
  const userList = document.getElementById('user-list');
  if(userList){
    userList.innerHTML = '';
    users.forEach(user =>{
      const userCard = createUserCard(user);
      userList.appendChild(userCard);
    })
  }
}

//@Return: Users 타입으로 필터링된 사용자들의 데이터
const filterUsers = (users: UsersType, query: string): UsersType => {

}

const init = async () => {
  const users = await fetchUsers();
  displayUsers(users);

}

document.addEventListener('DOMContentLoaded', init);
}