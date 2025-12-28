const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    // Create task div
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    // Create task text
    const taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "🗑";

    deleteBtn.addEventListener("click", () => {
        taskDiv.remove();
    });

    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(deleteBtn);
    taskList.appendChild(taskDiv);

    taskInput.value = "";
}