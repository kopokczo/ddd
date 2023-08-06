const btn = document.getElementById("btn");
let text = document.getElementById("textbox");
const tekst = document.getElementById("table");


btn.addEventListener('click', function(){
const textValue = textbox.value;
const toDo = document.createElement('li');
toDo.textContent = textValue;
tekst.appendChild(toDo);
});


