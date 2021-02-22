let trashElement = document.querySelectorAll('span.trash');
const createTodoInput = document.querySelector('.create-todo input'),
  createTodoBtn = document.querySelector('.create-todo button'),
  todoList = document.querySelector('.todo-list'),
  totalTasks = document.querySelector('.total-tasks'),
  clearAllBtn = document.querySelector('.removeAll');

const createTask = () => {
  const task = createTodoInput.value,
    allTasks = ++todoList.children.length;
  let layout = `<li>${task}<span class="trash"><i class="fas fa-trash"></i></span></li>`;

  todoList.innerHTML += layout;
  totalTasks.innerText = allTasks;
  createTodoInput.value = '';
  task.trim() && createTodoBtn.setAttribute('disabled', '');

  trashElement = document.querySelectorAll('.trash');
  trashElement.forEach((trash) => trash.addEventListener('click', removeTask));

  validationClearAllBtn();
};

createTodoBtn.addEventListener('click', createTask);

const removeTask = ({ currentTarget }) => {
  const allTasks = --todoList.children.length;
  currentTarget.parentElement.remove();
  totalTasks.innerText = allTasks;

  validationClearAllBtn();
};

const clearAllTasks = () => {
  trashElement.forEach((element) => element.parentElement.remove());
  totalTasks.innerText = '0';

  validationClearAllBtn();
};

clearAllBtn.addEventListener('click', clearAllTasks);

const validationClearAllBtn = () => {
  totalTasks.innerText > 0
    ? clearAllBtn.removeAttribute('disabled')
    : clearAllBtn.setAttribute('disabled', '');
};

const validationCreateTodo = (srcElement) => {
  const createTodoBtn = srcElement.nextElementSibling,
    currentTarget = srcElement;
  currentTarget.value.trim()
    ? createTodoBtn.removeAttribute('disabled')
    : createTodoBtn.setAttribute('disabled', '');
};

const validateTodoList = ({ srcElement }) => validationCreateTodo(srcElement);

createTodoInput.addEventListener('keyup', validateTodoList);
