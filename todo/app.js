const addTaskButton = document.getElementById("button");
const taskTextInput = document.getElementById("textbox");
const tasksList = document.getElementById("table");
const deleteLastTaskButton = document.getElementById("delete-button");

const onCreateElementClick = () => {
  const createdElement = createLiElementWithDeleteButton();

  addTextToElement(createdElement, taskTextInput.value);
  addCheckboxToElement(createdElement);
  addDeleteButtonToElement(createdElement);
  appendChildToList(tasksList, createdElement);
  //const isChecked = () => {
  //  while(input.checked) {
  //    input.style = "text-decoration: line-through";
  //  }
  //};
  //isChecked();
};

const onRemoveLastElement = () => {
  const selectedElements = tasksList.querySelectorAll("li");
  const lastElementIndex = selectedElements.length - 1;
  const lastElement = selectedElements[lastElementIndex];

  tasksList.removeChild(lastElement);
};

const createLiElementWithDeleteButton = () => {
  const li = document.createElement("li");
  li.style = "list-style-type: none";
  return li;
};
///tu mozna jak wczesniej tylko poprostu w css zmienic

const appendChildToList = (list, element) => {
  list.appendChild(element);
};

const addTextToElement = (element, text) => {
  element.textContent = text;
};

const addCheckboxToElement = (element) => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  element.appendChild(checkbox);
};

const addDeleteButtonToElement = (element) => {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style = "background-color: red";
  deleteButton.addEventListener("click", () => {
    tasksList.removeChild(element);
  });
  element.appendChild(deleteButton);
};

addTaskButton.addEventListener('click', onCreateElementClick);
deleteLastTaskButton.addEventListener('click', onRemoveLastElement);