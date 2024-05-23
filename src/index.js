import DOMHandler from "./modules/DOMHandler.js";
import formHandler from "./modules/formHandler.js";
import './style.css';

document.addEventListener("DOMContentLoaded", () => {
  DOMHandler.renderTasks();
  formHandler.init();
})
