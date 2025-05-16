const textInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const List = document.querySelector(".task-list");
const totalTasks = document.getElementById("totalTasks");
const completed = document.getElementById("completedTasks");


let taskArray = [];

addButton.addEventListener("click", () => {
  const task = textInput.value.trim();
  if (task === "") {
    alert("Please enter a task");
    return;
  }

  const emptyItem = document.querySelector(".empty-list");
  if (emptyItem) {
    emptyItem.remove();
  }

  const li = document.createElement("li");
  li.classList.add("task-item");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("complete-checkbox");

  const span = document.createElement("span");
  span.textContent = task;
  span.classList.add("task-text");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

 
  deleteButton.addEventListener("click", () => {
    li.remove();
    taskArray = taskArray.filter(t => t.element !== li); 
    updateData(); 
  });


  checkBox.addEventListener("change", () => {
    li.classList.toggle("completed");
    updateData(); 
  });

  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(deleteButton);
  List.appendChild(li);

  taskArray.push({ text: task, element: li }); 
  textInput.value = "";
  updateData();
});

function updateData() {
  totalTasks.textContent = `Total tasks: ${taskArray.length}`;

  let completedCount = 0;
  taskArray.forEach(task => {
    const check = task.element.querySelector(".complete-checkbox");
    if (check.checked) completedCount++;
  });

  completed.textContent = `Completed: ${completedCount}`;
}
