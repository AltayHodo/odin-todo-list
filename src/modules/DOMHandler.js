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
      if (task.completed) {
        taskItem.classList.add('completed')
      } else {
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

    renderSidebar();
  }

  const removeTask = (e) => {
    const index = e.target.dataset.index;
    currentProject.removeTask(index);
    renderTasks();
  }

  const toggleTask = (e) => {
    const index = e.target.dataset.index;
    currentProject.toggleTask(index);
    renderTasks();
  }

  const renderSidebar = () => {
    const sidebar = document.querySelector('#sidebar');
    const projContainer = document.querySelector('#projects-container');
    projContainer.innerHTML = '';
    projects.forEach((project, index) => {
      const projectItem = document.createElement('div');
      projectItem.textContent = project.name;
      projectItem.dataset.index = index;
      projectItem.classList.add('project-item');
      projContainer.appendChild(projectItem);
    });
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
      item.addEventListener('click', switchProject)
    })
  }

  const switchProject = (e) => {
    const index = e.target.dataset.index;
    currentProject = projects[index];
    renderTasks();
  }

  const switchToHome = () => {
    currentProject = mainToDo;
    renderTasks();
  }
  const home = document.querySelector('#home');
  home.addEventListener('click', switchToHome);


  return { renderTasks };
})();

export default DOMHandler;