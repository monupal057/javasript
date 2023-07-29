const clickable = document.getElementById("add-option");
clickable.addEventListener("click",ToggleModal);

var boxIndex = -1;
var singleTaskIndex = -1;


Todos=[];

// Todos is an Array that will store all Tasks.

renderItems();

function ToggleModal() {  
  console.log("here");
 
  const modal = document.getElementById("modal");
  console.log(modal.style.display);
  if (modal.style.display == "block") 
  {
    modal.style.display = "none";
  } 
  else 
  {
    modal.style.display = "block";
  }
  
  const taskInput = document.getElementById("task-Input");
  taskInput.value = "";
  taskInput.focus();
}
function ToggleSingleTaskModal() {

  const modal = document.getElementById("single-task-modal");
  modal.style.backgroundColor="cyan";
  // console.log(modal.style.display);
  const singleTaskContainer=document.getElementById("singleTaskCard");
  singleTaskContainer.innerHTML="";
  if (modal.style.display === "block") 
  {
    modal.style.display = "none";
  }
  else
   {
    modal.style.display = "block";
  }
      const container = document.getElementsByClassName("container")[0];
      container.style.display = "block";
      renderItems();
  // taskInput.focus();
}

function ToggleItemModal() {
  console.log("Item Modal CAlled");
  // Acess the Element with the ID as "modal"
  const modal = document.getElementById("item-modal");
  const itemInput2 = document.getElementById("item-input");
  itemInput2.value = "";
  // console.log(modal.style.display);
  if (modal.style.display === "block") 
  {
    modal.style.display = "none";
  } 
  else 
  {
    modal.style.display = "block";
  }
  itemInput2.focus();
}

function renderSingleItem(){
  const modal=document.getElementById("single-task-modal");
  const singleTaskContainer=document.getElementById("singleTaskCard");
  singleTaskContainer.innerHTML="";

  // singleTaskContainer.style.width="300px";
  singleTaskContainer.style.display="flex";
  singleTaskContainer.style.justifyContent="center";

  const singleTask=document.getElementsByClassName("taskCard")[singleTaskIndex];
  // const itemInput = document.getElementById("item-input");
  console.log(singleTask,"index : ",singleTaskIndex);
  singleTaskContainer.appendChild(singleTask);
}

function removeValueAtIndex(index) {
  console.log("Index to remove : ", index);
  // removes the value at 'index' from Todos
  const left = Todos.slice(0, index);
  console.log("Left : ", left);

  const right = Todos.slice(Number(index) + 1, Todos.length);
  console.log("Right : ", right);

  Todos = left.concat(right);
  console.log("Combined : ", Todos);
}

function addTask() {
  console.log("Add Task Called");
  const taskInput = document.getElementById("task-Input");
  const newObj = { name: taskInput.value, items: [] };
  Todos.push(newObj);
  renderItems();
  ToggleModal();

}

function addItem() {
  console.log("Add Item Called for Index : ", boxIndex);
  const itemInput = document.getElementById("item-input");
  console.log("Item input given : ", itemInput.value);
  const newItemObject = { name: itemInput.value, isCompleted: false };
  Todos[boxIndex].items.push(newItemObject);
  console.log("Item",Todos[boxIndex].items);
  renderItems();
  if(singleTaskIndex!=-1)
  {
    renderSingleItem();
  }
  ToggleItemModal();
}

// This Function displays all the data in the Todos Array
