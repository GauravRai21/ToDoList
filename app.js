const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleTask(this)">${task}</span>
    <span class="delete" onclick="deleteTask(this)">✖</span>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function toggleTask(task) {
  task.parentElement.classList.toggle("done");
}

function deleteTask(task) {
  task.parentElement.remove();
}
