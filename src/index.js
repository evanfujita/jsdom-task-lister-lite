const tasks = document.getElementById('tasks')
const text = document.getElementById('new-task-description')

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', logSubmit);
});

function logSubmit(event) {
  let element = document.createElement('li')
  let newTask = tasks.lastChild
  tasks.appendChild(element)
  newTask.innerText = text.value
  event.preventDefault();
}