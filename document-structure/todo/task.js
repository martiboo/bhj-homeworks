let taskInput = document.getElementById("task__input");

function addElement(e) {
  let taskList = document.getElementById("tasks__list");
  let taskElement = document.createElement("div");
  taskElement.className = "task";
  taskElement.innerHTML = `<div class="task__title">
    ${taskInput.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
    `;

  taskList.appendChild(taskElement);
  taskInput.value = "";
  let removeButton = taskElement.querySelector(".task__remove");
  removeButton.addEventListener("click", function (e) {
    taskElement.remove();
  });
}

taskInput.addEventListener("keypress", function (e) {

  if (e.keyCode === 13) {
    addElement();
    e.preventDefault();
  }
});

let addButton = document.getElementById("tasks__add");

addButton.addEventListener("click", function (e) {
  addElement();
  e.preventDefault();
});