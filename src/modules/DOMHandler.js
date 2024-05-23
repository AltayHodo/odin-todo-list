import toDo from "./toDo";

const DOMHandler = (function () {
  const tasks = toDo.getTasks();

  const container = document.querySelector('#container');

  const renderTasks = () => {
    tasks.forEach((task, index) => {
      const taskItem = document.createElement('div');
      taskItem.textContent = task.title;
      taskItem.dataset.index = index;
      taskItem.classList.add('task-item');
      container.appendChild(taskItem);
    });
  }

  return { renderTasks };
})();

export default DOMHandler;