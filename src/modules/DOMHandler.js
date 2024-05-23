import { mainToDo, projects, addProject } from "./toDo";

const DOMHandler = (function () {
  let currentProject = mainToDo;


  const renderTasks = () => {
    const container = document.querySelector('#task-container');
    container.innerHTML = '';

    const tasks = currentProject.getTasks();

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
  }

  const removeTask = (e) => {
    const index = e.target.dataset.index;
    currentProject.removeTask(index);
    renderTasks();
    console.log(mainToDo)
    console.log(projects[0])
    console.log(projects[1])
  }

  const toggleTask = (e) => {
    const index = e.target.dataset.index;
    currentProject.toggleTask(index);
    renderTasks();
  }

  return { renderTasks };
})();

export default DOMHandler;