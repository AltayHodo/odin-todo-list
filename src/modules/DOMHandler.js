import toDo from "./toDo";

const DOMHandler = (function () {
  const tasks = toDo.getTasks();


  const renderTasks = () => {
    const container = document.querySelector('#container');
    container.innerHTML = '';

    tasks.forEach((task, index) => {
      const taskItem = document.createElement('div');
      taskItem.innerHTML = 
        `
         <input type="checkbox">
         ${task.title}
         ${task.dueDate}
         <button class="remove-button" data-index="${index}">x</button>
        `

      taskItem.classList.add('task-item');
      taskItem.classList.add(`${task.priority}`);
      container.appendChild(taskItem);
    });
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach(button => {
      button.addEventListener('click', removeTask)
    })
  }

  const removeTask = (e) => {
    const index = e.target.dataset.index;
    toDo.removeTask(index);
    renderTasks();
  }

  return { renderTasks };
})();

export default DOMHandler;