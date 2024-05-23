class Task{
  constructor(title, description, priority, completed=false){
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.completed = completed;
  }

  toggleComplete(){
    this.completed = !this.completed;
  }
}

export default Task;