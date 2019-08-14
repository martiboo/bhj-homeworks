let taskInput = document.getElementById("task__input");

taskInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {

    let taskList = document.getElementById("tasks__list");

    taskList.innerHTML += `<div class="task">
    <div class="task__title">
      ${taskInput.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>
    `;
  }

  let remove = document.getElementsByClassName("task__remove");

  let arrRemove = Array.from(remove);

  for (i = 0; i < arrRemove.length; i++) {
    let elementRemove = arrRemove[i];
    elementRemove.addEventListener("click", function (e) {
      elementRemove.parentElement.remove();
    })
  }

})