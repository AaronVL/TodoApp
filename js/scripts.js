const button = document.querySelector('#addButton');
const listItem = document.querySelector('ul');


button.addEventListener('click', (e) => {
  let li = document.createElement('li');
  let taskValue = document.querySelector('#newTask').value;
  let todo = document.createTextNode(taskValue);
  li.appendChild(todo);
  if (taskValue === '') {
    alert("You must add a task");
  } else {
    document.querySelector('#todoList').appendChild(li);
  }
  document.querySelector('#newTask').value = "";
})

listItem.addEventListener('click', (e) => {
  if (e.target.tagName === 'li') {
    e.target.classList.toggle('lineThrough');
}
});
