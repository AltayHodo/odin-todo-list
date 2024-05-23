import Task from "./task.js";

const toDo = (function () {
  const tasks = [];
  const getTasks = () => tasks;

  const addTask = (task) => tasks.push(task);

  const removeTask = (index) => tasks.splice(index, 1);




  return { getTasks, addTask, removeTask };
})();

const task1 = new Task('title1', 'task description', 'high')
const task2 = new Task('title2', 'description 2', 'low')
toDo.addTask(task1);
toDo.addTask(task2);

export default toDo;