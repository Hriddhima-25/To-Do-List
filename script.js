// Retrieve tasks from local storage
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }
  
  // Save tasks to local storage
  function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Render tasks on the page
  function renderTasks() {
    const taskList = document.getElementById('task-list');
    const tasks = getTasks();
  
    taskList.innerHTML = '';
  
    tasks.forEach((task, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'task-item';
      listItem.innerHTML = `
        <span class="task-text">${task}</span>
        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
      `;
      taskList.appendChild(listItem);
    });
  }
  
  // Add a new task
  function addTask() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();
  
    if (task !== '') {
      const tasks = getTasks();
      tasks.push(task);
      saveTasks(tasks);
      renderTasks();
      taskInput.value = '';
    }
  }
  
  // Delete a task
  function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks();
  }
  
  // Event listeners
  document.getElementById('add-btn').addEventListener('click', addTask);
  
  // Initial render
  renderTasks();
  