const createTodoInput = document.querySelector(".create-todo input"),
  createTodoBtn = document.querySelector(".create-todo button"),
  todoList = document.querySelector(".todo-list"),
  totalTasks = document.querySelector(".total-tasks"),
  removeAll = document.querySelector(".removeAll");
let trashElement = document.querySelectorAll("span.trash");

function createTodo() {
  const task = createTodoInput.value,
    allTasks = ++todoList.children.length;
  let layout = `<li>${task}<span class="trash"><i class="fas fa-trash"></i></span></li>`;

  if (!task) {
    alert("Digite alguma task");
    createTodo.remove();
  }

  todoList.innerHTML += layout;
  totalTasks.innerText = allTasks;

  trashElement = document.querySelectorAll(".trash");
}

function removeTodo({ currentTarget }) {
  const allTasks = --todoList.children.length;
  currentTarget.parentElement.remove();
  totalTasks.innerText = allTasks;
}

function removeAllTodo() {
  trashElement.forEach((element) => element.parentElement.remove());
  totalTasks.innerText = "0";
}

setInterval(() =>
  trashElement.forEach((trash) => trash.addEventListener("click", removeTodo))
);

createTodoBtn.addEventListener("click", createTodo);

removeAll.addEventListener("click", removeAllTodo);
