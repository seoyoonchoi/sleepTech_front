//*HTML 요소 갖고오기
const thumbBar = document.querySelector('.thumb-bar');
const displayedImage = document.querySelector('.displayed-img');
const button = document.querySelector('.button');
const overlay = document.querySelector('.overlay');

//*썸네일 바에 이벤트 리스너 추가
thumbBar.addEventListener('click', (e) => {
  //클릭된 요소가 이미지인 경우
  if(e.target.tagName ==='IMG'){
    const imgSrc = e.target.src;
    displayedImage.src = imgSrc;
  };

});

//*다크모드 버튼기능 구현하기
button.addEventListener('click', () => {
  if(button.classList.contains('dark')){
    button.textContent = '라이트모드';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
    button.classList.remove('dark');
  }else{
    button.textContent = '다크모드';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'
    button.classList.add('dark');
  }

});

