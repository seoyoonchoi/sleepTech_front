document.cookie = "cookie02 = 쿠키2; path=/;"

//cf)live서버의 도메인은
function getCookieValue(cookieName){
  let cookies = document.cookie.split(';');
  let length = cookies.length;
  for(let i = 0; i<length; i++){
    let cookie = cookies[i];
    let parts = cookie.split('=');
    let name = parts[0].trim();
    if(name ===cookieName){
      return parts[1] || '';
    }
  }
  return '';
}

let username = getCookieValue('username');
console.log(username);

let userAge = getCookieValue('userAge');
console.log(userAge);

let changedUsername = getCookieValue('username');
console.log(changedUsername);

function deleteCookie(cookieName){
  document.cookie = cookieName+"=; expires = Wed 20 Febuary 2025 00:00:00 GMT; path =/;"}
  
deleteCookie('username');
deleteCookie('userEmail');
deleteCookie('cookie02');


  