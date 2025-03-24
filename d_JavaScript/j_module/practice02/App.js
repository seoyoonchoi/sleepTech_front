import { TodoManager } from "./TodoManager.js";

//?Todo Manager의 인스턴스를 생성한다

const todoManager = new TodoManager();

const form = document.querySelector('#new-todo-form');
const input = document.querySelector('#new-todo');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', (e) => {
  //form요소 내부에서 submit 이벤트 발생 시 
  e.preventDefault();
  //form요소에서 submit이벤트 발생 시 '기본제출 이벤트를 방지'한다

  //form내부에서 데이터를 할일 목록에 추가한다.
  const text = input.ariaValueMax.trim();
  if(text !== ''){
    todoManager.addTodo(text);
    input.value = '';

  }

});

//할일 목록 업데이트 함수

function updateTodoList(){
  //모든 할일 목록을 갖고오기
  const todos = todoManager.getTodos();
  todoList.innerHTML = '';
  
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo.text;

    if(todo.completed){
      li.classList.add('completed');
    }else{
      li.classList.remove('completed');
    }

    li.addEventListener('click', () => {
      todoManager.toggleCompleted(todo.id);
      updateTodoList();
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');

    //삭제 버튼 클릭 시 해당 할 일 항목 제거
    deleteButton.addEventListener('click', () => {
      todoManager.removeTodo(todo.id);
      updateTodoList();
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);

  });

}

updateTodoList();