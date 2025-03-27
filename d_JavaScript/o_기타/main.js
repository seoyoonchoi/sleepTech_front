document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  button.addEventListener('click', () =>{
    //!window.location.href = "경로값";
    //브라우저에서 현재 페이지의 URL을 나타내는속성이다. 
    //해당 값을 새 URL로 설정하면 브라우저가 해당 URL로 이동하게 된다.(Redirection)
    /*
    *경로값은 현재 페이지 URL을 기준으로 작성한다.
    1)'second.html'|'./second.html'
      : 현재 페이지와 동일한 디렉토리에 있는 파일로 이동한다
    1) '../파일명.확장자'
      : 상위 디렉토리에 위치한 파일을 검색한다
    3) '/파일명.확장자'
      :루트 디렉토리에 위치한 파일을 검색

    */
   window.location.href = "second.html";

  });
});