var  addToDo = document.querySelector('#addToDo');
var newTask = document.querySelector('#task');
var userInput = document.querySelector('#userinput');




addToDo.addEventListener('click', () =>{
    localStorage.setItem('todos', userInput.value);
   
    if(userInput.value == 0){
        alert("Add To Your To-Do")
        
    }
    // added the html tag so as to insert and style all the icon inside
    else{
        newTask.innerHTML += 
        `
        <div class ="tasks">
            <span id="taskname">
            <input type="checkbox" class="check">${userInput.value}
            </span>
            <button class ="delete">
            <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        `
       
    //    after adding the value to the new task the input value should remain empty
        userInput.value = ""


        // manipulating the delete button
        var deleteButton = document.querySelectorAll('.delete');
        for(var i = 0; i < deleteButton.length; i++){
            deleteButton[i].onclick = function(){
                // remove the parent element which is the task 
                this.parentElement.remove()
            }
        }

        
        // manipulating the task out when completed
        var completeTask = document.querySelectorAll('.tasks');
              for(var i = 0; i < completeTask.length; i++){
                completeTask[i].onclick = function(){ 
                this.classList.toggle('done')   

        }

       }
    }
   
    
})

userInput.addEventListener('keyup', (event) =>{
    if(event.which === 13){
        newTask.innerHTML +=
        `
        <div class="tasks">
             <span id="taskname">
            <input type="checkbox" class="check">${userInput.value}
            </span>
            
             <button class="delete">
                <i class="fa-solid fa-trash"></i>
             </button>
         </div>
        `
        // after adding the value to the new task the input value should remain empty
        userInput.value = ""

        // manipulating the delete button
        var deleteButton = document.querySelectorAll('.delete');
        for(var i = 0; i < deleteButton.length; i++){
            deleteButton[i].onclick = function(){
                this.parentElement.remove()
            }
        }

        
        // manipulating the task out when completed
        var completeTask = document.querySelectorAll('.tasks');
              for(var i = 0; i < completeTask.length; i++){
                completeTask[i].onclick = function(){
                this.classList.toggle('done')   

        }

       }
        
    }
    else if(event.which == ''){
        alert("Add To Your ToDo")
    }
   
    
    
     
})



let mydata = JSON.stringify(userInput.value)