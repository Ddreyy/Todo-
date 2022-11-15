var addToDo = document.querySelector("#addToDo");
var newTask = document.querySelector("#task");
var userInput = document.querySelector("#userinput");

const todos = [{ task: "" }];
addToDo.addEventListener("click", () => {
  todos.push({ task: userInput.value });
  localStorage.setItem("todos", JSON.stringify(todos));
  const storage = localStorage.getItem("todos");
  const parsedData = JSON.parse(storage);
  console.log(parsedData);

  if (userInput.value == 0) {
    alert("Add To Your To-Do");
  }
  // added the html tag so as to insert and style all the icon inside
  else {
    newTask.innerHTML += `
        <div class ="tasks">
            <span id="taskname" data-target=${userInput.value}>
            <input type="checkbox" class="check">${userInput.value}
            </span>
            <button class ="delete">
            <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        `;

    //    after adding the value to the new task the input value should remain empty
    userInput.value = "";

    // manipulating the delete button
    var deleteButton = document.querySelectorAll(".delete");
    for (var i = 0; i < deleteButton.length; i++) {
      deleteButton[i].onclick = function () {
        // remove the parent element which is the task
        const val = prompt("What task do you want to delete?");
        console.log(val);
        const todo = todos.find((todo) => todo.task === val);
        const index = todos.indexOf(todo);
        todos.splice(index, 1);
        console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
        this.parentElement.remove();
      };
    }

    // manipulating the task out when completed
    var completeTask = document.querySelectorAll(".tasks");
    for (var i = 0; i < completeTask.length; i++) {
      completeTask[i].onclick = function () {
        this.classList.toggle("done");
      };
    }
  }
});

userInput.addEventListener("keyup", (event) => {
  if (event.which === 13) {
    todos.push({ task: userInput.value });
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
    newTask.innerHTML += `
        <div class="tasks">
             <span id="taskname">
            <input type="checkbox" class="check">${userInput.value}
            </span>
            
             <button class="delete">
                <i class="fa-solid fa-trash"></i>
             </button>
         </div>
        `;
    // after adding the value to the new task the input value should remain empty
    userInput.value = "";

    // manipulating the delete button
    var deleteButton = document.querySelectorAll(".delete");
    for (var i = 0; i < deleteButton.length; i++) {
      deleteButton[i].onclick = function () {
        const val = prompt("What task do you want to delete?");
        console.log(val);
        const todo = todos.find((todo) => todo.task === val);
        const index = todos.indexOf(todo);
        todos.splice(index, 1);
        console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
        this.parentElement.remove();
      };
    }

    // manipulating the task out when completed
    var completeTask = document.querySelectorAll(".tasks");
    for (var i = 0; i < completeTask.length; i++) {
      completeTask[i].onclick = function () {
        this.classList.toggle("done");
      };
    }
  } else if (event.which == "") {
    alert("Add To Your ToDo");
  }
});
window.onload = () => {
  const localTODO = localStorage.getItem("todos");
  const parsedTodo = JSON.parse(localTODO)
  console.log(parsedTodo)
  parsedTodo.map((key, index) => {
    newTask.innerHTML += `
    <div class ="tasks">
        <span id="taskname" data-target=${userInput.value}>
        <input type="checkbox" class="check">${key.task}
        </span>
        <button class ="delete">
        <i class="fa-solid fa-trash"></i>
        </button>
    </div>
    `;
  });
};
let mydata = JSON.stringify(userInput.value);
