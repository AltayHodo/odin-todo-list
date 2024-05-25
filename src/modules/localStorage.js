// localStorage.js
import Task from "./task";
import { ToDo, addProject } from "./toDo";

const LocalStorageManager = (() => {
  const updateMainToDo = (mainToDo) => {
    localStorage.setItem('mainToDo', JSON.stringify(mainToDo));
  };

  const getMainToDo = () => {
    const parsed = JSON.parse(localStorage.getItem('mainToDo'));
    if (!parsed) return new ToDo('Main');
    const tasks = parsed.tasks.map((task) => {
      return new Task(task.title, task.priority, task.dueDate, task.completed);
    });
    const main = new ToDo('Main');
    main.tasks = tasks;
    return main;
  };

  const updateProjects = (projects) => {
    const serializedProjects = projects.map(project => ({
      name: project.name,
      tasks: project.tasks.map(task => ({
        title: task.title,
        priority: task.priority,
        dueDate: task.dueDate,
        completed: task.completed
      }))
    }));
    localStorage.setItem('projects', JSON.stringify(serializedProjects));
  };

  const getProjects = (addProject) => {
    const parsed = JSON.parse(localStorage.getItem('projects'));
    if (!parsed) return [];
    const newProjects = parsed.map((project) => {
      const tasks = project.tasks.map((task) => {
        return new Task(task.title, task.priority, task.dueDate, task.completed);
      });
      const newProject = addProject(project.name);
      newProject.tasks = tasks;
      return newProject;
    });
    return newProjects;
  };

  return { updateMainToDo, getMainToDo, updateProjects, getProjects };
})();

export default LocalStorageManager;
