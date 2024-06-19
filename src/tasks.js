var taskForm = document.querySelector('.form');
var formInput = document.querySelector('.form-input');
var taskListElement = document.querySelector('.list');
var tasks = loadTasks();
tasks.forEach(renderTask);
function loadTasks() {
    var storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
}
taskForm === null || taskForm === void 0 ? void 0 : taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var taskDescription = formInput === null || formInput === void 0 ? void 0 : formInput.value;
    if (taskDescription) {
        var task = {
            description: taskDescription,
            isCompleted: false,
        };
        // add task to list
        addTask(task);
        // render tasks
        renderTask(task);
        // update local storage
        updateStorage();
        formInput.value = '';
        return;
    }
    alert('Please enter a task description');
});
function addTask(task) {
    tasks.push(task);
    console.log(tasks);
}
function renderTask(task) {
    var taskElement = document.createElement('li');
    taskElement.textContent = task.description;
    // checkbox
    var taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.isCompleted;
    // toggle checkbox
    taskCheckbox.addEventListener('change', function () {
        task.isCompleted = !task.isCompleted;
        updateStorage();
    });
    taskElement.appendChild(taskCheckbox);
    taskListElement === null || taskListElement === void 0 ? void 0 : taskListElement.appendChild(taskElement);
}
function updateStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
