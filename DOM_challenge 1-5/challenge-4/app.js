const textInput = document.getElementById("taskInput");
const addbtn = document.getElementById("addButton");
const list = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

let totalTaskCount = 0;
let completedTaskCount = 0;

addbtn.addEventListener("click", () => {
  const value = textInput.value.trim();

  if (value === "") {
    alert("Task cannot be empty!");
    return;
  }


  const emptyMessage = document.querySelector(".empty-list");
  if (emptyMessage) {
    emptyMessage.remove();
  }


  const li = document.createElement("li");
  li.innerText = value;
  li.classList.add("task-item");

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    li.style.textDecoration = li.classList.contains("completed") ? "line-through" : "none";
    if (li.classList.contains("completed")) {
      completedTaskCount++;
    } else {
      completedTaskCount--;
    }
    updateStats();
  });

  list.appendChild(li);
  textInput.value = "";

  totalTaskCount++;
  updateStats();
});

function updateStats() {
  totalTasks.innerText = `Total tasks: ${totalTaskCount}`;
  completedTasks.innerText = `Completed: ${completedTaskCount}`;
}
