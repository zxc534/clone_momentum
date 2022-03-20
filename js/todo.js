const toDoForm = document.querySelector("#toDoForm");
const toDoInput = document.querySelector("#toDoForm input");
const toDoList = document.querySelector("#toDoList");

const TODO_KEY = "toDos";

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODO_KEY,JSON.stringify(toDos));
}

function loadToDos(){
  const savedToDos = localStorage.getItem(TODO_KEY);
  if (savedToDos !== null){
    toDos = JSON.parse(savedToDos);
    toDos.forEach(paintToDo);
  }
}

function deleteToDo(event){
  const li = event.target.parentElement;
  toDos = toDos.filter(item => item.id!==parseInt(li.id));
  saveToDos();
  li.remove();
}

function paintToDo(newToDo){
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  li.appendChild(span);
  
  const button = document.createElement("button");
  button.innerText = '✖';
  button.addEventListener("click",deleteToDo);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleTodoSubmit(event){
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text : newToDo,
    id : Date.now(),
  }
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

loadToDos();
toDoForm.addEventListener("submit",handleTodoSubmit);
