localStorage.setItem('username','bergerac')
localStorage.setItem('userAge', 29);
localStorage.setItem('isStudent', false);

let userInfo = {
  name : 'bergerac',
  age : 28
}

localStorage.setItem('userInfo', JSON.stringify(userInfo));

let keyValue = localStorage.getItem('key');
let usernameValue = localStorage.getItem('username');
let userAgeValue = localStorage.getItem('userAge');

if(keyValue||userAgeValue||usernameValue){
  console.log(keyValue);
  console.log(userAgeValue);
  console.log(usernameValue);
}

let userInfoData = localStorage.getItem('userInfo');
let userInfoValue = JSON.parse(userInfoData);
console.log(userInfoValue);

localStorage.removeItem('userAge');
localStorage.removeItem('isStudent');
localStorage.clear();
