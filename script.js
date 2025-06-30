function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskTime = document.getElementById('taskTime');
  const taskList = document.getElementById('taskList');

  const text = taskInput.value.trim();
  const time = taskTime.value;

  if (!text) return alert('Please enter a task');

  const li = document.createElement('li');
  li.className = 'task-item';

  const taskText = document.createElement('span');
  taskText.className = 'task-text';
  taskText.textContent = `${text} ${time ? '(' + time + ')' : ''}`;

  const actions = document.createElement('div');
  actions.className = 'task-actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.onclick = () => li.classList.toggle('completed');

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏';
  editBtn.onclick = () => {
    const newText = prompt('Edit task:', text);
    if (newText) taskText.textContent = `${newText} ${time ? '(' + time + ')' : ''}`;
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.onclick = () => taskList.removeChild(li);

  actions.append(completeBtn, editBtn, deleteBtn);
  li.append(taskText, actions);
  taskList.appendChild(li);

  taskInput.value = '';
  taskTime.value = '';
}
