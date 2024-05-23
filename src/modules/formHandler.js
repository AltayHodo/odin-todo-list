import { mainToDo, projects, addProject } from "./toDo";
import DOMHandler from "./DOMHandler";
import Task from "./task";

const formHandler = (function () {
  const taskForm = document.querySelector('#task-form');
  const projectForm = document.querySelector('#project-form');

  const handleTaskFormSubmit = (e) => {
    e.preventDefault();

    const currentProject = DOMHandler.getCurrentProject();
    const title = taskForm.querySelector('input[name="title"]').value;
    const priority = taskForm.querySelector('input[name="priority"]:checked').value;
    const date = taskForm.querySelector('input[name="date"]').value;
    const task = new Task(title, priority, date);
    currentProject.addTask(task);
    DOMHandler.renderTasks();
    taskForm.reset();
  };

  const handleProjectFormSubmit = (e) => {
    e.preventDefault();
    const projectName = projectForm.querySelector('input[name="project-name"]').value;
    addProject(projectName);
    DOMHandler.renderTasks();
    projectForm.reset();
  };

  const init = () => {
    taskForm.addEventListener("submit", handleTaskFormSubmit);
    projectForm.addEventListener("submit", handleProjectFormSubmit);
  };

  return { init };
})();

export default formHandler;