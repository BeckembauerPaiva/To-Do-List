//Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoImput = document.querySelector("#todo-imput");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editImput = document.querySelector("#edit-imput");
const cancelEditbtn = document.querySelector("#cancel-edit-btn");


let oldImputValue;


//Funções
const saveTodo = (Text) => {

const todo = document.createElement("div");
todo.classList.add("todo");

const todoTitle = document.createElement("h3");
todoTitle.innerText = Text;
todo.appendChild(todoTitle);

const doneBtn = document.createElement("button");
doneBtn.classList.add("finish-todo");
doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
todo.appendChild(doneBtn);

const editBtn = document.createElement("button");
editBtn.classList.add("edit-todo");
editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
todo.appendChild(editBtn);

const deleteBtn = document.createElement("button");
deleteBtn.classList.add("remove-todo");
deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
todo.appendChild(deleteBtn);

todoList.appendChild(todo);
todoImput.value = "";
todoImput.focus();

};




const toggleForms = () => {
editForm.classList.toggle("hide");
todoForm.classList.toggle("hide");
todoList.classList.toggle("hide");


};

const updateTodo = (Text) => {
    const todos = document.querySelectorAll(".todo");
todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");

if(todoTitle.innerText === oldImputValue) {
    todoTitle.innerText = Text;
}

});



}






//eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

const imputValue = todoImput.value;

if (imputValue) {
    saveTodo(imputValue);
}


} );

document.addEventListener("click" , (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;
    if(parentEl && parentEl.querySelector("h3") ) {
      todoTitle = parentEl.querySelector("h3").innerText;  
    }

if(targetEl.classList.contains("finish-todo")){
    parentEl.classList.toggle("done");
}
if (targetEl.classList.contains("remove-todo")){
    parentEl.remove();
}
if (targetEl.classList.contains("edit-todo")) {
    const todoTitle =parentEl.querySelector("h3").innerText;
   toggleForms();
    editImput.value = todoTitle;
    oldImputValue = todoTitle;
}
});

cancelEditbtn.addEventListener("click" , (e) =>{
    e.preventDefault();

    toggleForms();
});

editForm.addEventListener("submit" , (e) => {

    e.preventDefault();

    const editImputValue = editImput.value;

if(editImputValue) {
updateTodo(editImputValue);
}

toggleForms();

});











