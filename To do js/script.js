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