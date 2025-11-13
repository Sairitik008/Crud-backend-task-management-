const API_URL = 'http://localhost:5000/tasks';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-form');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', createTask);
    fetchTasks();

    async function fetchTasks() {
        const response = await fetch(API_URL);
        const tasks = await response.json();

        taskList.innerHTML = '';

        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `
        <div class="task-info">
          <strong>${task.title}</strong><br>
          <small>${task.description || 'No description'}</small>
        </div>
        <div class="task-actions">
          <button class="edit" data-id="${task.id}">Edit</button>
          <button class="delete" data-id="${task.id}">Delete</button>
        </div>
      `;
            taskList.appendChild(li);
        });

        // Attach button listeners after rendering
        document.querySelectorAll('.edit').forEach(btn =>
            btn.addEventListener('click', () => updateTask(btn.dataset.id))
        );
        document.querySelectorAll('.delete').forEach(btn =>
            btn.addEventListener('click', () => deleteTask(btn.dataset.id))
        );
    }

    async function createTask(event) {
        event.preventDefault();
        const title = document.getElementById('title').value.trim();
        const description = document.getElementById('description').value.trim();

        if (!title) return alert('Please enter a task title.');

        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description })
        });

        form.reset();
        fetchTasks();
    }

    async function updateTask(id) {
        const newTitle = prompt('Enter new title:');
        const newDesc = prompt('Enter new description:');

        if (!newTitle) return;

        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: newTitle, description: newDesc })
        });

        fetchTasks();
    }

    async function deleteTask(id) {
        if (!confirm('Are you sure you want to delete this task?')) return;

        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        fetchTasks();
    }
});
