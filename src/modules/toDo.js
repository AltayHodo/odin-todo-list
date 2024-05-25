import Task from "./task.js";
import LocalStorageManager from "./localStorage.js";

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
    LocalStorageManager.updateMainToDo();
    LocalStorageManager.updateProjects();
  }

  removeTask(index){
    const task = this.tasks[index];
    this.tasks.splice(index, 1);
    if (this.mainList) {
      const mainIndex = this.mainList.tasks.indexOf(task);
      if (mainIndex > -1) {
        this.mainList.tasks.splice(mainIndex, 1);
      }
    }
    LocalStorageManager.updateMainToDo();
    LocalStorageManager.updateProjects();
  }

  toggleTask(index){
    this.tasks[index].toggleComplete();
    LocalStorageManager.updateMainToDo();
    LocalStorageManager.updateProjects();
  }
}

const mainToDo = LocalStorageManager.getMainToDo(mainToDo);
const projects = LocalStorageManager.getProjects();


function addProject(projectName){
  const project = new ToDo(projectName, mainToDo);
  projects.push(project);
  LocalStorageManager.updateProjects();
  return project;
}

export { ToDo, mainToDo, projects, addProject };