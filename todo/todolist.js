const todos = [
  {
    text: "Order cat food",
  },
  {
    text: "Clean kitchen",
  },
  {
    text: "Buy food",
  },
  {
    text: "Do work",
  },
  {
    text: "Exercise",
  },
];

const renderTodos = function (todos) {
  const todosContainer = document.querySelector(".todos");
  todosContainer.innerHTML = "";
  todos.forEach(function (todo) {
    const p = document.createElement("p");
    p.textContent = todo.text;
    todosContainer.appendChild(p);
  });
};

renderTodos(todos);

document.querySelector(".addtodo").addEventListener("submit", function (e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.text.value,
  });
  renderTodos(todos);
  e.target.elements.text.value = "";
});

const removeall = function () {
  todos.length = 0;
  renderTodos(todos);
};
document.querySelector(".remove").addEventListener("click", function () {
  removeall();
});
