////state derived frontends ----state and component and render it
let todos = []; //this is an array
function addTodo() {
  todos.push({
    title: document.querySelector("input").value,
  });
  document.querySelector("input").value = ""; //clears the input box
  render();
}

function deleteLastTodo() {
  todos.splice(todos.length - 1, 1); //removes the last element in the array
  render();
}

function deleteFirstTodo() {
  todos.splice(0, 1);
  render();
}

function createTodoComponent(todo, index) {
  const div = document.createElement("div");
  div.className = "todo-item";
  const h1 = document.createElement("h1");
  const button = document.createElement("button");
  button.innerHTML = "Delete";
  //// Add event listener here to delete the correct todo
  button.addEventListener("click", function () {
    todos.splice(index, 1); // remove this todo
    render(); // update the UI
  });
  h1.innerHTML = todo.title;
  div.appendChild(h1);
  div.appendChild(button);
  return div;
}

//// react
function render() {
  document.querySelector("#todos").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const element = createTodoComponent(todos[i], i);
    document.querySelector("#todos").appendChild(element);
  }
}
