let add=document.getElementById('addToDo');
let todo=document.getElementById('toDoContainer');
let inputField=document.getElementById('inputField');

add.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText=inputField.value;
    todo.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener('click',function(){
                paragraph.style.textDecoration="line-through";
                })
                paragraph.addEventListener('dblclick',function(){
                todo.removeChild(paragraph);
                })
})
