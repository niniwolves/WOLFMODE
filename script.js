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

const deleteButton = document.createElement("button");
deleteButton.textContent = "DELETE";
deleteButton.addEventListener("click", function () {
    taskItem.remove();
    updateTaskCount();
});

checkbox.addEventListener("change", function () {
    taskItem.classList.toggle("completed", checkbox.checked);
    updateTaskCount();
});

taskItem.appendChild(checkbox);
taskItem.appendChild(taskLabel);
taskItem.appendChild(deleteButton);

taskList.appendChild(taskItem);

taskInput.value = "";

updateTaskCount();
});

function updateTaskCount() {
    const remainingTasks = taskList.querySelectorAll("li:not(.completed)").length;

    taskCount.textContent = remainingTasks + " tasks remaining";
}