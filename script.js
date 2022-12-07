//alert("Working!");

window.onload = onLoadTaskManager;

//storage of the task in arrays
let arrayList = [];

function onLoadTaskManager() {
  // when keysup in the input tag
  // to see that the characters have been pressed
  // to be worked on
}

function addNewTask() {
  //for when adding li to Ul

  let inputTask = document.getElementById("newTask").value;
  if (inputTask === "") {
    alert("Must enter a task!");
    return;
  }
  let newTaskNode = document.createElement("li");
  //newTaskNode.classList.add("myTaskList");
  newTaskNode.innerText = inputTask;
  newTaskNode.className += "task-item";

  document.getElementById("myTaskList").appendChild(newTaskNode);
  document.getElementById("newTask").value = "";
}

let lists = document.getElementById("myTaskList");

function removeFirst() {
  // remove first item from list.

  if (lists.hasChildNodes()) {
    lists.removeChild(lists.children[0]);
  } else {
    alert("No task to be removed!");
  }
}

function removeLast() {
  lists.removeChild(lists.lastChild);
}

let listGather = document.querySelectorAll("li");

function changeTaskBackgroundColor() {
  let pickColor = document.getElementById("colorPicker");
  pickColor.addEventListener("change", function () {
    for (let i = 0; i < listGather.length; i++) {
      listGather[i].style.backgroundColor = pickColor.value;
      console.log(listGather);
    }
  });
}

function getTaskAsArray() {
  arrayList = listGather;
  // list into an array and show in console (only call function from console )
  for (let i = 0; i < arrayList.length; i++) {
    console.log("Task list in array: ", arrayList[i].innerText);
  }
}
