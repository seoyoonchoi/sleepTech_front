export class TodoManager{
  //TodoManager 생성자
  constructor(){
    //TodoManager 호출 시 해당 객체에 todos 속성이 생성되고 초기화된다.
    this.todos = [];

  }

  //1)새로운 할 일 추가
  addTodo(text){
    const newTodo = {
    id: Date.now(), //Date 객체의 현재 날짜와 시간을 id 로 사용한다
    text,
    completed: false
    };
    this.todos.push(newTodo);
  }

  //2)특정 할 일 항목의 완료 상태 토글
  toggleCompleted(id){
    const todo = this.todos.find(todo =>todo.id === id);
    if (todo){
      //할당연산자는 우항에서 좌항으로 계산한다
      todo.completed = !todo.completed;
    }
  }
  
  //3) 특정 할 일 항목 제거
  removeTodo(id){
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  //4) 모든 할 일 항목 반환
  getTodos(){
    return this.todos;
  }
  
}