{

//타입속성정의
type Task<T> = {
  id: Number;
  content: T;
  completed: boolean;
}

class TaskManager<T>{
  tasks: Task<T>[];
  nextId: number;

  constructor(){
    this.tasks = [];
    this.nextId = 1;
  }

  addTask(content: T): void{
    this.tasks.push({
      id: this.nextId,
      content: content,
      completed: false
    });
    this.nextId++;
    this.updateTaskCount();
  }

  removeTask(id: number): void{
    this.tasks = this.tasks.filter(task =>task.id !== id);
    this.renderTasks('task-list');
    this.updateTaskCount();
  }

  renderTasks(taskListId: string):void{
    const taskList = document.getElementById(taskListId) as HTMLUListElement;
    taskList.innerHTML = '';
    this.tasks.forEach(task =>{
      const li = document.createElement('li');
      li.textContent = `${task.content}`;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '삭제';
      deleteButton.onclick = () => {
        this.removeTask(task.id);
      };
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.checked = task.completed;
      checkBox.onchange = () => {
        task.completed = !task.completed;
        this.renderTasks(taskListId);

      }
      if(task.completed){
        li.style.textDecoration = 'line-through';

      }
      //생성된 요소 추가
      li.appendChild(deleteButton);
      li.insertBefore(checkBox, li.firstChild);
      taskList.appendChild(li);


    });

    this.updateTaskCount();
}

updateTaskCount(){
  const countElement = document.getElementById('task-count');

  if(countElement){
    countElement.textContent = `할일개수 ${this.tasks.length}`;
  }
}
}

document.addEventListener('DOMContentLoaded', () => {
  const TaskManager = new TaskManager<string>();
  const addButton = document.getElementById('add-button') as HTMLButtonElement;
  const newTaskInput = document.getElementById('task-input') as HTMLInputElement;

  addButton.addEventListener('click', () => {
    if(newTaskInput.value.trim() !== ''){
      TaskManager.addTask(newTaskInput.value);
      TaskManager.renderTasks('task-list');
      newTaskInput.value = '';
    }
  })
});}