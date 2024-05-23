import Task from "./task.js";

class ToDo {
  constructor(name, mainList = null) {
    this.name = name;
    this.tasks = []
    this.mainList = mainList;
  }

  getTasks(){
    return this.tasks;
  }

  addTask(task){
    this.tasks.push(task);
    if (this.mainList) {
      this.mainList.addTask(task);
    }
  }

  removeTask(index){
    const task = this.tasks[index];
    this.tasks.splice(index, 1);
    if (this.mainList) {
      const mainIndex = this.mainList.tasks.indexOf(index);
      if (mainIndex > -1) {
        this.mainList.tasks.splice(mainIndex, 1);
      }
    }
  }

  toggleTask(index){
    this.tasks[index].toggleComplete();
  }
}

const mainToDo = new ToDo('main');
const projects = [];

const addProject = (projectName) => {
  const project = new ToDo(projectName, mainToDo);
  projects.push(project);
  return project;
}

const task1 = new Task('dishes', 'high', '2024-05-18');
const task2 = new Task('laundry', 'low', '2024-05-23');

mainToDo.addTask(task1);
mainToDo.addTask(task2);

const studyProject = addProject('Study');
const exerciseProject = addProject('Exercise');

const studyTask = new Task('read chapter 4', 'medium', '2024-05-25');
studyProject.addTask(studyTask);

const exerciseTask = new Task('go jim', 'high', '2024-05-23');
exerciseProject.addTask(exerciseTask);



export { mainToDo, projects, addProject };