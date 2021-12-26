const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const delLi = event.path[2];
  delLi.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(delLi.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const newLi = document.createElement("li");
  newLi.id = newTodo.id;
  const newSpan = document.createElement("span");
  newSpan.innerText = newTodo.text;
  const newBtn = document.createElement("button");
  const icon = document.createElement("i");
  icon.className = "fas fa-times fa-2x";
  newBtn.appendChild(icon);
  newBtn.addEventListener("click", deleteToDo);
  newLi.appendChild(newSpan);
  newLi.appendChild(newBtn);
  toDoList.appendChild(newLi);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
