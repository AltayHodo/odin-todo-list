(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --dark-gray: rgb(51, 51, 51);\n  --light-gray: rgb(221, 221, 221);\n  --medium-gray: rgb(204, 204, 204);\n  --green: rgb(170, 255, 170);\n  --red: rgb(255, 190, 190);\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 90px 1fr;\n  height: 100vh;\n}\n\n#header {\n  grid-column: 1/ 3;\n  background-color: var(--dark-gray);\n  color: white;\n}\n\n#sidebar {\n  max-width: 400px;\n  overflow-y: auto;\n  background-color: var(--light-gray);\n}\n\n#main {\n  padding: 20px;\n  padding-right: 50px;\n}\n\n#tasks-title {\n  font-size: 35px;\n  color: var(--dark-gray);\n  margin-bottom: 20px;\n}\n\n#task-container{\n  padding-left: 20px;\n}\n\n.task-item{\n  display: flex;\n  gap: 10px;\n  max-width: 600px;\n  margin-bottom: 15px;\n  font-size: 20px;\n  padding: 10px;\n  background-color: #ececec;\n}\n\n.task-name{\n  flex: 1;\n}\n\n.task-date {\n  margin-right: 20px;\n  color: #888;\n}\n\n.task-item input[type="checkbox"] {\n  margin-left: 10px;\n}\n\n.task-item .remove-button,\n.remove-project-button {\n  background: none;\n  border: none;\n  color: #888;\n  cursor: pointer;\n  font-size: 20px;\n  transition: color 0.3s ease;\n}\n\n.remove-project-button{\n  font-size: 16px;\n}\n\n\n.task-item .remove-button:hover,\n.remove-project-button:hover {\n  color: #e74c3c;\n}\n\n\n\n\nh1 {\n  font-size: 40px;\n  height: 90px;\n  padding-left: 20px;\n  display: flex;\n  align-items: center;\n}\n\n#sidebar {\n  padding: 20px;\n}\n\n#home,\n#projects-title {\n  font-size: 20px;\n  margin-bottom: 10px;\n}\n\n#projects-container {\n  padding-left: 10px;\n}\n\n#projects-container>div {\n  margin-bottom: 5px;\n}\n\n#task-form {\n  border: 1px solid var(--light-gray);\n  border-radius: 10px;\n  box-shadow: 0 5px 5px rgba(0,0,0, .15);\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n  width: 300px;\n  padding: 20px;\n  font-size: 20px;\n}\n\nlabel[for="title"] {\n  margin-bottom: 5px;\n}\n\n#title,\n#date {\n  height: 25px;\n  padding-left: 5px;\n  font-size: 15px;\n  border-radius: 10px;\n  border: 1px solid var(--light-gray);\n}\n\n\n\n#title,\n#radio-group {\n  margin-bottom: 10px;\n}\n\n#date {\n  margin-bottom: 15px;\n}\n\n\n\n\n#radio-group input[type="radio"] {\n  display: none;\n}\n\n#radio-group label {\n  display: inline-block;\n  padding: 6px 12px;\n  margin: 5px;\n  font-size: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  cursor: pointer;\n  color: #333;\n  transition: background-color 0.3s, color 0.3s;\n}\n\n#radio-group input[type="radio"]#low+label {\n  border: 2px solid green;\n  color: green;\n}\n\n#radio-group input[type="radio"]#medium+label {\n  border: 2px solid orange;\n  color: orange;\n}\n\n#radio-group input[type="radio"]#high+label {\n  border: 2px solid red;\n  color: red;\n}\n\n#radio-group input[type="radio"]#low:checked+label,\n#radio-group input[type="radio"]#low:hover+label {\n  background-color: green;\n  color: white;\n}\n\n#radio-group input[type="radio"]#medium:checked+label,\n#radio-group input[type="radio"]#medium:hover+label {\n  background-color: orange;\n  color: white;\n}\n\n#radio-group input[type="radio"]#high:checked+label,\n#radio-group input[type="radio"]#high:hover+label {\n  background-color: red;\n  color: white;\n}\n\n.buttons-row {\n  display: flex;\n  justify-content: space-between;\n}\n\n.add-button,\n.cancel-button {\n  padding: 10px 40px;\n  border: 1px solid var(--dark-gray);\n  border-radius: 10px;\n}\n\n.add-button {\n  background-color: var(--green);\n}\n\n.cancel-button {\n  background-color: var(--red);\n}\n\n#project-form {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 10px 10px 10px;\n}\n\n#project-name {\n  height: 35px;\n  width: 100%;\n  margin-bottom: 5px;\n  border-radius: 5px;\n  border: 1px solid var(--light-gray);\n  padding-left: 5px;\n}\n\n#project-form button {\n  padding: 8px 25px;\n}\n\n#home,\n#projects-title,\n.project-item{\n  padding: 4px;\n  border-radius: 5px;\n}\n\n#home:hover,\n.project-item:hover,\n#add-task-button:hover,\n#add-project-button:hover{\n  background-color: var(--medium-gray);\n}\n\n.project-item{\n  display: flex;\n  justify-content: space-between;\n}\n\n.high {\n  border-left: 2px solid red;\n}\n\n.medium {\n  border-left: 2px solid orange;\n}\n\n.low {\n  border-left: 2px solid green;\n}\n\n.completed {\n  color: grey;\n  text-decoration: line-through;\n}\n\n#add-task-button,\n#add-project-button{\n  margin-top: 20px;\n  border: none;\n  background: none;\n  font-size: 20px;\n  padding: 4px;\n}\n\n#add-project-button,\n#add-task-button{\n  width: 100%;\n  text-align: left;\n  border-radius: 5px;\n}\n\n.active{\n  background-color: var(--medium-gray);\n  font-weight: bold;\n}',""]);const s=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=o.base?d[0]+o.base:d[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var g=r(m,o);o.byIndex=s,n.splice(s,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var d=o(e,r),c=0;c<a.length;c++){var l=t(a[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=class{constructor(e,n,t,o=!1){this.title=e,this.priority=n,this.dueDate=t,this.completed=o}toggleComplete(){this.completed=!this.completed}},n={updateMainToDo:e=>{localStorage.setItem("mainToDo",JSON.stringify(e))},getMainToDo:()=>{const n=JSON.parse(localStorage.getItem("mainToDo"));if(!n)return new r("Main");const t=n.tasks.map((n=>new e(n.title,n.priority,n.dueDate,n.completed))),o=new r("Main");return o.tasks=t,o},updateProjects:e=>{const n=e.map((e=>({name:e.name,tasks:e.tasks.map((e=>({title:e.title,priority:e.priority,dueDate:e.dueDate,completed:e.completed})))})));localStorage.setItem("projects",JSON.stringify(n))},getProjects:n=>{const t=JSON.parse(localStorage.getItem("projects"));return t?t.map((t=>{const o=t.tasks.map((n=>new e(n.title,n.priority,n.dueDate,n.completed))),r=n(t.name);return r.tasks=o,r})):[]}},o=n;class r{constructor(e,n=null){this.name=e,this.tasks=[],this.mainList=n}getTasks(){return this.tasks}addTask(e){this.tasks.push(e),this.mainList&&this.mainList.addTask(e),o.updateMainToDo(i),o.updateProjects(a)}removeTask(e){const n=this.tasks[e];if(this.tasks.splice(e,1),this.mainList){const e=this.mainList.tasks.indexOf(n);e>-1&&this.mainList.tasks.splice(e,1)}else a.forEach((e=>{const t=e.tasks.indexOf(n);t>-1&&e.tasks.splice(t,1)}));o.updateMainToDo(i),o.updateProjects(a)}toggleTask(e){this.tasks[e].toggleComplete(),o.updateMainToDo(i),o.updateProjects(a)}}let a=[];const i=o.getMainToDo()||new r("Main");function s(e){const n=new r(e,i);return a.push(n),o.updateProjects(a),n}a=o.getProjects(s);const d=function(){let e=i,n=-1;const t=()=>{const n=document.querySelector("#task-container");n.innerHTML="",e.getTasks().forEach(((e,t)=>{const o=document.createElement("div");o.innerHTML=`\n         <input type="checkbox" data-index="${t}" ${e.completed?"checked":""}>\n         <span class="task-name">${e.title}</span>\n         <span class="task-date">${e.dueDate}</span>\n         <button class="remove-button" data-index="${t}">x</button>\n        `,o.classList.add("task-item"),o.classList.add(`${e.priority}`),e.completed?o.classList.add("completed"):o.classList.remove("completed"),n.appendChild(o)})),document.querySelectorAll(".remove-button").forEach((e=>{e.addEventListener("click",r)})),n.querySelectorAll('input[type="checkbox"]').forEach((e=>{e.addEventListener("change",s)})),d(),p()},r=n=>{const o=n.target.dataset.index;e.removeTask(o),t()},s=n=>{const o=n.target.dataset.index;e.toggleTask(o),t()},d=()=>{const e=document.querySelector("#projects-container");e.innerHTML="",a.forEach(((n,t)=>{const o=document.createElement("div");o.innerHTML=`\n        <span data-index="${t}">${n.name}</span>\n        <button class="remove-project-button" data-index="${t}"> x </button>\n      `,o.dataset.index=t,o.classList.add("project-item"),e.appendChild(o)})),document.querySelectorAll(".project-item").forEach((e=>{e.addEventListener("click",l)})),document.querySelectorAll(".remove-project-button").forEach((e=>{e.addEventListener("click",c)}))},c=e=>{var n;e.stopPropagation(),n=e.target.dataset.index,a[n].tasks.forEach((e=>{const n=i.getTasks().indexOf(e);n>-1&&i.getTasks().splice(n,1)})),a.splice(n,1),o.updateMainToDo(i),o.updateProjects(a),u(),t()},l=o=>{const r=o.target.dataset.index;e=a[r],n=r,document.querySelector("#tasks-title").textContent=e.name,t()},p=()=>{document.querySelectorAll(".project-item, #home").forEach((e=>{e.classList.remove("active")})),-1===n?document.querySelector("#home").classList.add("active"):null!==n&&document.querySelector(`.project-item[data-index="${n}"]`).classList.add("active")},u=()=>{m.classList.add("active"),n=-1,e=i,document.querySelector("#tasks-title").textContent="Home",t()},m=document.querySelector("#home");return m.addEventListener("click",u),{renderTasks:t,getCurrentProject:()=>e}}(),c=function(){const n=document.querySelector("#task-form"),t=document.querySelector("#project-form"),o=t=>{t.preventDefault();const o=d.getCurrentProject(),r=n.querySelector('input[name="title"]').value.trim(),a=n.querySelector('input[name="priority"]:checked'),i=n.querySelector('input[name="date"]').value,s=document.querySelector("#form-error");if(s&&s.remove(),!r)return void alert("Please enter a title.");if(!a)return void alert("Please select a priority.");const c=a.value,l=new e(r,c,i);o.addTask(l),d.renderTasks(),n.reset(),n.style.display="none",document.querySelector("#add-task-button").style.display="block"},r=e=>{e.preventDefault();const n=t.querySelector('input[name="project-name"]').value;""!=n?(s(n),d.renderTasks(),t.reset(),t.style.display="none",document.querySelector("#add-project-button").style.display="block"):alert("Project name can't be empty")};return document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#add-task-button"),o=document.querySelector("#cancel-task-button");n.style.display="none",e.style.display="block",e.addEventListener("click",(()=>{n.style.display="block",e.style.display="none"})),o.addEventListener("click",(()=>{n.style.display="none",e.style.display="block",n.reset()}));const r=document.querySelector("#add-project-button"),a=document.querySelector("#cancel-project-button");t.style.display="none",r.style.display="block",r.addEventListener("click",(()=>{t.style.display="block",r.style.display="none"})),a.addEventListener("click",(()=>{t.style.display="none",r.style.display="block",t.reset()}))})),{init:()=>{n.addEventListener("submit",o),t.addEventListener("submit",r)}}}();var l=t(72),p=t.n(l),u=t(825),m=t.n(u),g=t(659),y=t.n(g),b=t(56),f=t.n(b),h=t(540),x=t.n(h),v=t(113),k=t.n(v),j=t(208),S={};S.styleTagTransform=k(),S.setAttributes=f(),S.insert=y().bind(null,"head"),S.domAPI=m(),S.insertStyleElement=x(),p()(j.A,S),j.A&&j.A.locals&&j.A.locals,document.addEventListener("DOMContentLoaded",(()=>{d.renderTasks(),c.init()}))})()})();