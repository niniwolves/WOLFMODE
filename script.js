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

    taskList.appendChild(taskItem);

    taskInput.value = "";

    updateTaskCount();
});
function updateTaskCount() {
    const count = taskList.children.length;

    taskCount.textContent = count + " tasks remaining";
}