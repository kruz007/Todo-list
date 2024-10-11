let inputTitle = document.querySelector(".js-input-title");
let inputDate = document.querySelector(".js-input-date");
let todoListDiv = document.querySelector(".js-todo-list-div");
let addButton = document.querySelector(".js-add-button");
// let delButton = document.querySelector(".js-del-button");

let todoList = JSON.parse(localStorage.getItem("events")) || [];

let save = () => {
  localStorage.setItem("events", JSON.stringify(todoList));
};

let refresh = () => {
  todoListDiv.innerHTML = null;
  todoList.map((event, index) => {
    todoListDiv.innerHTML += `
        <div>
          <p>${event.title}</p>
          <p>${event.date}</p>
          <button onclick="del(${index})">DEL</button>
        </div>
        `;
  });
};

let add = () => {
  todoList.push({ title: inputTitle.value, date: inputDate.value });
  save();
  refresh();
  inputTitle.value = null;
  inputDate.value = null;
};

let del = (index) => {
  todoList.splice(index, 1);
  save();
  refresh();
};

refresh();

addButton.addEventListener("click", add);
