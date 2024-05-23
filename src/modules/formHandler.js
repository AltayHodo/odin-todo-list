import toDo from "./toDo";
import DOMHandler from "./DOMHandler";
import Task from "./task";

const formHandler = (function () {
  const form = document.querySelector('#task-form');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const title = form.querySelector('input[name="title"]').value;
    const priority = form.querySelector('input[name="priority"]:checked').value;
    const date = form.querySelector('input[name="date"]').value;
    const task = new Task(title, priority, date);
    toDo.addTask(task);
    DOMHandler.renderTasks();
    form.reset();
    console.log(priority);
  };

  const init = () => {
    form.addEventListener("submit", handleFormSubmit);
  };

  return { init };
})();

export default formHandler;