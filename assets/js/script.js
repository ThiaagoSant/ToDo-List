const createTodoInput = document.querySelector(".create-todo input"),
  createTodoBtn = document.querySelector(".create-todo button"),
  todoList = document.querySelector(".todo-list"),
  totalTasks = document.querySelector(".total-tasks"),
  clearAllBtn = document.querySelector(".removeAll");

const showTasks = () => {
  let getLocalStorage = localStorage.getItem("New Todo"),
    layout = "";

  getLocalStorage == null
    ? (listArray = [])
    : (listArray = JSON.parse(getLocalStorage));

  listArray.forEach(
    (task, index) =>
      (layout += `<li>${task}<span onclick="removeTask(${index})" class="trash"><i class="fas fa-trash"></i></span></li>`)
  );

  todoList.innerHTML = layout;
  totalTasks.innerText = listArray.length;
  createTodoInput.value.trim() && createTodoBtn.setAttribute("disabled", "");
  createTodoInput.value = "";

  const validationClearAllBtn = () =>
    listArray.length > 0
      ? clearAllBtn.removeAttribute("disabled")
      : clearAllBtn.setAttribute("disabled", "");
  validationClearAllBtn();
};

showTasks();

const createTask = () => {
  const task = createTodoInput.value;
  let getLocalStorage = localStorage.getItem("New Todo");

  getLocalStorage == null
    ? (listArray = [])
    : (listArray = JSON.parse(getLocalStorage));

  listArray.push(task);
  localStorage.setItem("New Todo", JSON.stringify(listArray));

  showTasks();
};

createTodoBtn.addEventListener("click", createTask);

const removeTask = (index) => {
  let getLocalStorage = localStorage.getItem("New Todo");

  listArray = JSON.parse(getLocalStorage);
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));

  showTasks();
};

const clearAllTasks = () => {
  listArray = [];
  localStorage.setItem("New Todo", JSON.stringify(listArray));

  showTasks();
};

clearAllBtn.addEventListener("click", clearAllTasks);

const validationCreateTodo = (srcElement) => {
  const createTodoBtn = srcElement.nextElementSibling,
    currentTarget = srcElement;

  currentTarget.value.trim()
    ? createTodoBtn.removeAttribute("disabled")
    : createTodoBtn.setAttribute("disabled", "");
};

const validateTodoList = ({ srcElement }) => validationCreateTodo(srcElement);

createTodoInput.addEventListener("keyup", validateTodoList);
