document.cookie = "username=lsa; path=/;"
let date = new Date();
date.setTime(date.getTime()+(1*60*60*1000));
let expires = "expires=" +date.toUTCString();//시간을 협정 세계시 문자열로 반환해준다.

document.cookie = "userEmail=qwe123;" + expires + "; path=/;";

