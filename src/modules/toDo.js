import Task from "./task.js";
import LocalStorageManager from "./localStorage.js";

class ToDo {
  constructor(name, mainList = null) {
    this.name = name;
    this.tasks = [];
    this.mainList = mainList;
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task) {
    this.tasks.push(task);
    if (this.mainList) {
      this.mainList.addTask(task);
    }
    LocalStorageManager.updateMainToDo(mainToDo);
    LocalStorageManager.updateProjects(projects);
  }

  removeTask(index) {
    const task = this.tasks[index];
    this.tasks.splice(index, 1);
    if (this.mainList) {
      const mainIndex = this.mainList.tasks.indexOf(task);
      if (mainIndex > -1) {
        this.mainList.tasks.splice(mainIndex, 1);
      }
    }
    LocalStorageManager.updateMainToDo(mainToDo);
    LocalStorageManager.updateProjects(projects);
  }

  toggleTask(index) {
    this.tasks[index].toggleComplete();
    LocalStorageManager.updateMainToDo(mainToDo);
    LocalStorageManager.updateProjects(projects);
  }
}

let projects = []
const mainToDo = LocalStorageManager.getMainToDo() || new ToDo('Main');
projects = LocalStorageManager.getProjects(addProject);

function addProject(projectName) {
  const project = new ToDo(projectName, mainToDo);
  projects.push(project);
  LocalStorageManager.updateProjects(projects);
  return project;
}

export { ToDo, mainToDo, projects, addProject };
