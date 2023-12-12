function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        const todoList = document.querySelector('.todo-list');
        const newTaskItem = document.createElement('div');
        newTaskItem.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            deleteTask(newTaskItem);
        });

        newTaskItem.appendChild(checkbox);
        newTaskItem.appendChild(taskLabel);
        newTaskItem.appendChild(deleteButton);

        todoList.appendChild(newTaskItem);

        newTaskInput.value = '';
    }
}

function deleteTask(taskItem) {
    const todoList = document.querySelector('.todo-list');
    todoList.removeChild(taskItem);
}
