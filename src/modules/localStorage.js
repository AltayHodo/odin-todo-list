import { ToDo, mainToDo, projects } from "./toDo";
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

  return { updateMainToDo, getMainToDo }
})();

export default LocalStorageManager;