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

const editButton = document.createElement("button");
editButton.textContent = "EDIT";
editButton.addEventListener("click", function () {
    const newTask = prompt("Edit your task:", taskLabel.textContent);

    if (newTask === null || newTask.trim() === "") {
        return;
    }

    taskLabel.textContent = newTask.trim();
    saveTasks();
});

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
taskItem.appendChild(editButton);
taskItem.appendChild(deleteButton);

taskList.appendChild(taskItem);
saveTasks();

taskInput.value = "";

updateTaskCount();
});

function updateTaskCount() {
    const remainingTasks = taskList.querySelectorAll("li:not(.completed)").length;

    taskCount.textContent = remainingTasks + " tasks remaining";
}
function saveTasks() {
    localStorage.setItem("wolfmodeTasks", taskList.innerHTML);
}
function loadTasks() {
    taskList.innerHTML = localStorage.getItem("wolfmodeTasks") || "";

    const tasks = taskList.querySelectorAll("li");

    tasks.forEach(function (taskItem) {
        const checkbox = taskItem.querySelector("input");
        const taskLabel = taskItem.querySelector("span");
        const buttons = taskItem.querySelectorAll("button");

        let editButton;
        let deleteButton;

        if (buttons.length === 1) {
            deleteButton = buttons[0];

            editButton = document.createElement("button");
            editButton.textContent = "EDIT";

            taskItem.insertBefore(editButton, deleteButton);
        } else {
            editButton = Array.from(buttons).find(function (button) {
                return button.textContent === "EDIT";
            });

            deleteButton = Array.from(buttons).find(function (button) {
                return button.textContent === "DELETE";
            });
        }

        editButton.addEventListener("click", function () {
            const newTask = prompt(
                "Edit your task:",
                taskLabel.textContent
            );

            if (newTask === null || newTask.trim() === "") {
                return;
            }

            taskLabel.textContent = newTask.trim();

            saveTasks();
        });

        deleteButton.addEventListener("click", function () {
            taskItem.remove();

            saveTasks();
            updateTaskCount();
        });

        checkbox.addEventListener("change", function () {
            taskItem.classList.toggle(
                "completed",
                checkbox.checked
            );

            saveTasks();
            updateTaskCount();
        });
    });

    saveTasks();
    updateTaskCount();
}

loadTasks();