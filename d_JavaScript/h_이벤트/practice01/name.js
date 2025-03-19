let todoInput = document.querySelector('#todo-input');
let addButton = document.querySelector('#add-button');
let todoList = document.querySelector('#todo-list');


//추가 버튼 클릭 시 
addButton.addEventListener('click', () => {
  if(todoInput.value !==''){
    //동적으로 li태그를 생성하기
    let newItem = document.createElement('li');
    newItem.textContent = todoInput.value;
    newItem.classList.add('todo-item');
    todoList.appendChild(newItem);
    todoInput.value = '';
  }

});

todoList.addEventListener('click', (e) => {
  if(e.target.tagName ==='LI'){
    e.target.classList.toggle('completed');
  }});

document.addEventListener('DOMContentLoaded', () => {
  const wordInput = document.querySelector('#word-input');
  const p = document.querySelector('#para');

  wordInput.addEventListener('keyup', (e) => {
    const length = wordInput.value.length;
    p.textContent
  })
})