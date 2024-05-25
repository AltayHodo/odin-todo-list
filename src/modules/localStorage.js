import { ToDo, addProject, mainToDo, projects } from "./toDo";
import Task from "./task";

const LocalStorageManager = (() => {
  const updateMainToDo = () => {
    localStorage.setItem('mainToDo', JSON.stringify(mainToDo));
  }

  const getMainToDo = () =>{
    const parsed = JSON.parse(localStorage.getItem('mainToDo'));
    if (! parsed ) return new ToDo('Main');
    const tasks = parsed.tasks.map((task) => {
      return new Task(task.title, task.priority, task.dueDate, task.completed);
    });
    const main = new ToDo('Main');
    main.tasks = tasks;
    return main;
  }

  const updateProjects = () => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  const getProjects = () => {
    const parsed = JSON.parse(localStorage.getItem('projects'));
    console.log(parsed);
    if (! parsed ) return [];
    const newProjects = parsed.map((project) => {
      const tasks = project.tasks.map((task) => {
        return new Task(task.title, task.priority, task.dueDate, task.completed);
      });
      const newProject = addProject(project.name);
      newProject.tasks = tasks;
      return newProject;
    });
    return newProjects;
  }

  return { updateMainToDo, getMainToDo, updateProjects, getProjects }
})();

export default LocalStorageManager;