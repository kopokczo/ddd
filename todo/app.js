const addTaskButton = document.getElementById("btn");
const taskTextInput = document.getElementById("textbox");
const tasksList = document.getElementById("table");
const deleteLastTaskButton = document.getElementById('delete-button');

const createLiElementWithDeleteButton = () => {
  return document.createElement('li');
}

const appendChildToList = (list, element) => {
  list.appendChild(element);
}

const addTextToElement = (element, text) => {
  element.textContent = text;
}

const onRemoveLastElement = () => {
  const selectedElements = tasksList.querySelectorAll("li");
  const lastElementIndex = selectedElements.length - 1;
  const lastElement = selectedElements[lastElementIndex];

  tasksList.removeChild(lastElement);
} 

const onCreateElementClick = () => {
  const createdElement = createLiElementWithDeleteButton();

  addTextToElement(createdElement, taskTextInput.value);
  appendChildToList(tasksList, createdElement);      
}

addTaskButton.addEventListener('click', onCreateElementClick);
deleteLastTaskButton.addEventListener('click', onRemoveLastElement);