import Task from "./task.js";

const toDo = (function () {
  const tasks = [];
  const getTasks = () => tasks;

  const addTask = (task) => tasks.push(task);

  const removeTask = (index) => tasks.splice(index, 1);

  const toggleTask = (index) => {
    tasks[index].toggleComplete();
  };

  return { getTasks, addTask, removeTask, toggleTask };
})();

const task1 = new Task('dishes', 'high', '2024-05-18 ')
const task2 = new Task('math homework', 'low', '2024-05-23')
toDo.addTask(task1);
toDo.addTask(task2);

export default toDo;