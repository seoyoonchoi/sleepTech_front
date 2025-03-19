// let todo = {
//   id : 1,
//   content: '정보처리기능사 필기 원서 접수',
//   completed: false
// }

let todos = [];
let nextId = 1;

//1)할일 추가함수
function addTodo(content){
  //함수 호출 시 인자로 할 일의 내용을 전달받고 새로운 할일을 생성
  const newTodo = {
    id: nextId,
    content: content,
    completed: false
  };
  nextId++;
  todos.push(newTodo);
  displayTodos();

}

//2)할일 수정함수
function togleTodo(id){
  todos = todos.map(todo =>{
    if(todo.id ===id){
      return{...todo, completed: !todo.completed};
    }
    return todo;
  })
  displayTodos();
}

//3)할일 삭제함수

function deleteTodo(id){
  todos = todos.filter(todo => todo.id !== id);
  displayTodos();
}

//4)할일 출력조회
function displayTodos(){
  console.log('현재의 할일 목록');
  todos.forEach(todo =>{console.log(`${todo.id}: ${todo.content}-${todo.completed ? '완료됨': '미완'}`);
});
}

addTodo('자바스크립트 복습하기');
addTodo('자바복습하기');
addTodo('이력서 작성');
addTodo('자기소개서 작성');

togleTodo(3);
deleteTodo(3);

addTodo('자격증 일정 알아보기');
