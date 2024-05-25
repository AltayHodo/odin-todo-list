import DOMHandler from "./modules/DOMHandler.js";
import formHandler from "./modules/formHandler.js";
import './style.css';
import LocalStorageManager from "./modules/localStorage.js";
import { mainToDo } from "./modules/toDo.js";

document.addEventListener("DOMContentLoaded", () => {
  DOMHandler.renderTasks();
  formHandler.init();
  LocalStorageManager.getProjects();
})
