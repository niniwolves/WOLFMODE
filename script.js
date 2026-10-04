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
    taskItem.textContent = taskText;
    taskItem.addEventListener("click", function () {
    taskItem.classList.toggle("completed");
    updateTaskCount();
});

    taskList.appendChild(taskItem);

    taskInput.value = "";

    updateTaskCount();
});
function updateTaskCount() {
    const remainingTasks = taskList.querySelectorAll("li:not(.completed)").length;

    taskCount.textContent = remainingTasks + " tasks remaining";
}