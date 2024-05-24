import { addProject } from "./toDo";
import DOMHandler from "./DOMHandler";
import Task from "./task";

const formHandler = (function () {
  const taskForm = document.querySelector('#task-form');
  const projectForm = document.querySelector('#project-form');

  const handleTaskFormSubmit = (e) => {
    e.preventDefault();

    const currentProject = DOMHandler.getCurrentProject();
    const title = taskForm.querySelector('input[name="title"]').value.trim();
    const priorityElement = taskForm.querySelector('input[name="priority"]:checked');
    const date = taskForm.querySelector('input[name="date"]').value;

    const errorElement = document.querySelector('#form-error');
    if (errorElement) {
      errorElement.remove();
    }

    if (!title) {
      alert('Please enter a title.');
      return;
    }

    if (!priorityElement) {
      alert('Please select a priority.');
      return;
    }

    const priority = priorityElement.value;
    const task = new Task(title, priority, date);
    currentProject.addTask(task);
    DOMHandler.renderTasks();
    taskForm.reset();
  };

  const handleProjectFormSubmit = (e) => {
    e.preventDefault();
    const projectName = projectForm.querySelector('input[name="project-name"]').value;
    if (projectName == '') {
      alert('Project name can\'t be empty');
      return;
    }
    addProject(projectName);
    DOMHandler.renderTasks();
    projectForm.reset();
  };

  document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.querySelector('#add-task-button');
    const cancelTaskButton = document.querySelector('#cancel-task-button');
    taskForm.style.display = 'none';
    addTaskButton.style.display = 'block';


    addTaskButton.addEventListener('click', () => {
      taskForm.style.display = 'block';
      addTaskButton.style.display = 'none';
    });

    cancelTaskButton.addEventListener('click', () => {
      taskForm.style.display = 'none';
      addTaskButton.style.display = 'block';
      taskForm.reset();
    });

    const addProjectButton = document.querySelector('#add-project-button');
    const cancelProjectButton = document.querySelector('#cancel-project-button');
    projectForm.style.display = 'none';
    addProjectButton.style.display = 'block';


    addProjectButton.addEventListener('click', () => {
      projectForm.style.display = 'block';
      addProjectButton.style.display = 'none';
    });

    cancelProjectButton.addEventListener('click', () => {
      projectForm.style.display = 'none';
      addProjectButton.style.display = 'block';
      taskForm.reset();
    });
  });


  const init = () => {
    taskForm.addEventListener("submit", handleTaskFormSubmit);
    projectForm.addEventListener("submit", handleProjectFormSubmit);
  };

  return { init };
})();

export default formHandler;