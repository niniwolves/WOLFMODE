const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;

    if (taskText === "") {
        return;
    }
    const taskItem = document.createElement("li");

const checkbox = document.createElement("input");
checkbox.type = "checkbox";

const taskLabel = document.createElement("span");
taskLabel.textContent = taskText;

checkbox.addEventListener("change", function () {
    taskItem.classList.toggle("completed", checkbox.checked);
    updateTaskCount();
});

taskItem.appendChild(checkbox);
taskItem.appendChild(taskLabel);