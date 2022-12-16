const todoList = [];

// this function handles add task
function addTodoHandler() {
  const task = document.getElementById("task").value;
  // check if task is valid
  if (!task) {
    return alert("Invalid task name");
  }
  // add task in todoList array
  todoList.push(task);
  const todoHtml = todoAsHtml();
  // set values
  document.getElementById("listTodo").innerHTML = todoHtml;
  document.getElementById("task").value = "";
}

// this function returns array of table row elements
function todoAsHtml() {
  let result = "";
  for (let i = 0; i < todoList.length; i++) {
    const taskName = todoList[i];
    result =
      result +
      ` <tr>
             <td>${1 + i}</td>
             <td>${taskName}</td>
             <td><button onclick="removeTaskHandler(${i})">Done</button></td>
         </tr>`;
  }
  return result; // string of tr elements
  // return todoList.map(
  //   (taskName, index) => ` <tr>
  //           <td>${1 + index}</td>
  //           <td>${taskName}</td>
  //           <td><button onclick="removeTaskHandler(${index})">Done</button></td>
  //       </tr>`
  // );
}

// remove task function
function removeTaskHandler(index) {
  console.log("remove task");
  todoList.splice(index, 1); // splice method
  const todoHtml = todoAsHtml();
  console.log(todoHtml);
  // set values
  document.getElementById("listTodo").innerHTML = todoHtml;
}
