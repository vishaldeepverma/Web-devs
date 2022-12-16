// this function handles add task
function addTodoHandler() {
  const task = document.getElementById("task").value;
  // check if task is valid
  if (!task) {
    return alert("Invalid task name");
  }
  // get todoList from localstorage
  const todoList = getTodoList();
  todoList.push(task);
  // update localstorage
  setTodoList(todoList);
  // show all todos
  renderTodos();
  // empty input box, remove task name
  document.getElementById("task").value = "";
}

function renderTodos() {
  const todoHtml = todoAsHtml();
  // if no task is available show message no task available
  if (!todoHtml.length) {
    document.getElementById("listTodo").innerHTML = "No task available";
    return null;
  }
  // set values
  document.getElementById("listTodo").innerHTML = todoHtml.join("");
}

// this function returns array of table row elements
function todoAsHtml() {
  return getTodoList().map(
    (taskName, index) => ` <tr>
            <td>${1 + index}</td>
            <td>${taskName}</td>
            <td><button onclick="removeTaskHandler(${index})">Done</button></td>
        </tr>`
  );
}

// remove task function
function removeTaskHandler(index) {
  const todoList = getTodoList();
  todoList.splice(index, 1); // splice method
  // update localstorage
  setTodoList(todoList);
  // show todo's
  renderTodos();
}

// get todoList from localstorage
function getTodoList() {
  return localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
}

// add todoList to localstorage
function setTodoList(todoList) {
  localStorage.setItem("todos", JSON.stringify(todoList));
}

// show todo's
renderTodos();
