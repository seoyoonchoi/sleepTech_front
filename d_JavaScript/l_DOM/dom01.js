document.addEventListener('DOMContentLoaded', () => {
  //이벤트의 콜백함수는 화살표 함수 사용을 권장한다
  const header = document.querySelector('h1');

  header.textContent = 'HEADER ONE';
  header.style.color = 'white';
  header.style.backgroundColor = 'black';
  header.style.padding = '20px';

  const items = document.querySelectorAll('li');

  items.forEach(item => {
    item.textContent = 'LIST ITEM';
    item.style.color = 'pink';
    item.style.listStyle = 'none';
    item.style.backgroundColor = 'black';
  });

});

document.addEventListener('DOMContentLoaded', () => {
  const divElement = document.getElementById('getElementById');
  divElement.style.color = 'blue';
  divElement.style.backgroundColor = 'yellow';
  divElement.classList.add('special');
});
