document.addEventListener('DOMContentLoaded',() =>{
  const inputField = document.querySelector('#search-input');
  const list = document.querySelector('#item-list');
  const items = document.querySelectorAll('li');
  const noResult = document.querySelector('#no-result');
  //검색어 입력 시 입력값과 리스트의 내용값을 비교하는 이벤트 핸들러 정의
  inputField.addEventListener('input', () => {
  let value = inputField.value.toLowerCase();
  let visibleItemsCount = 0;
  items.forEach(item => {
    if(item.textContent.toLowerCase().includes(value)){
      item.style.display = '';

    }else{
      item.style.display = 'none'
    }

  });
  noResult.style.display = visibleItemsCount>0?'none':'block';


  });

});