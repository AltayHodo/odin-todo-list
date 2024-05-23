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
         <input type="checkbox" data-index="${index}" ${task.completed ? 'checked' : ''}>
         ${task.title}
         ${task.dueDate}
         <button class="remove-button" data-index="${index}">x</button>
        `

      taskItem.classList.add('task-item');
      taskItem.classList.add(`${task.priority}`);
      if(task.completed){
        taskItem.classList.add('completed')
      } else{
        taskItem.classList.remove('completed');
      }
      container.appendChild(taskItem);
    });

    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach(button => {
      button.addEventListener('click', removeTask);
    });

    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', toggleTask);
    })
    console.log(checkboxes);
  }

  const removeTask = (e) => {
    const index = e.target.dataset.index;
    toDo.removeTask(index);
    renderTasks();
  }

  const toggleTask = (e) => {
    const checkbox = e.target;
    const index = e.target.dataset.index;
    toDo.toggleTask(index);
    renderTasks();
  }

  return { renderTasks };
})();

export default DOMHandler;