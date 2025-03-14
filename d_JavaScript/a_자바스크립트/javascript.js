// 
const button = document.querySelector('button');
button.addEventListener('click',updateName);
function updateName(){
  const name = prompt('새로운 이름을 입력해주세요');
  button.textContent= `Player 1: ${name}`;
}
