import { mainToDo, projects, addProject } from "./toDo";

const DOMHandler = (function () {
  let currentProject = mainToDo;
  let activeProjectIndex = null; // -1 for Home, null for no selection

  const getCurrentProject = () => currentProject;

  const renderTasks = () => {
    const container = document.querySelector('#task-container');
    container.innerHTML = '';

    const tasks = currentProject.getTasks();

    tasks.forEach((task, index) => {
      const taskItem = document.createElement('div');
      taskItem.innerHTML =
        `
         <input type="checkbox" data-index="${index}" ${task.completed ? 'checked' : ''}>
         <span class="task-name">${task.title}</span>
         <span class="task-date">${task.dueDate}</span>
         <button class="remove-button" data-index="${index}">x</button>
        `;

      taskItem.classList.add('task-item');
      taskItem.classList.add(`${task.priority}`);
      if (task.completed) {
        taskItem.classList.add('completed');
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
    });

    renderSidebar();
    updateActiveClass();
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
      item.addEventListener('click', switchProject);
    });
  }

  const switchProject = (e) => {
    const index = e.target.dataset.index;
    currentProject = projects[index];
    activeProjectIndex = index;
    const taskTitle = document.querySelector('#tasks-title');
    taskTitle.textContent = currentProject.name;
    renderTasks();
  }

  const updateActiveClass = () => {
    const allItems = document.querySelectorAll('.project-item, #home');
    allItems.forEach(item => {
      item.classList.remove('active');
    });

    if (activeProjectIndex === -1) {
      document.querySelector('#home').classList.add('active');
    } else if (activeProjectIndex !== null) {
      document.querySelector(`.project-item[data-index="${activeProjectIndex}"]`).classList.add('active');
    }
  }

  const switchToHome = () => {
    home.classList.add('active');
    activeProjectIndex = -1;
    currentProject = mainToDo;
    const taskTitle = document.querySelector('#tasks-title');
    taskTitle.textContent = "Home";
    renderTasks();
  }

  const home = document.querySelector('#home');
  home.addEventListener('click', switchToHome);

  return { renderTasks, getCurrentProject };
})();

export default DOMHandler;
