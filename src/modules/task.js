class Task{
  constructor(title, priority, dueDate, completed=false){
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.completed = completed;
  }

  toggleComplete(){
    this.completed = !this.completed;
  }
}

export default Task;