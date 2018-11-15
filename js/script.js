let arr = [];

let todo = document.querySelector('.todo');
let submitButton = todo.querySelector('.todo__button-add');
let lineText = todo.querySelector('.todo__linetext');
let todoBody = todo.querySelector('.todo__body');
let todoForm = todo.querySelector('.todo__form');
let lineTextTemplayte = lineText;
let stor = localStorage.length;
let listTasks = todo.querySelector('.todo__list');
let clearItem = todo.querySelector('.todo__button-clear');




let arrTwo = [];
// arrTwo = localStorage.arrTwo ? JSON.parse(localStorage.arrTwo) : [];

let count = arrTwo.length;
const emptyCheck = (str) => {
  if (str.value !== '') {
    count = count + 1;
    arrTwo.push({num: count, title: str.value});
    localStorage.arrTwo = JSON.stringify(arrTwo);
    newItemAdd(arrTwo[count]);
  } else {

      lineText.classList.add('todo__linetext--error');

      setTimeout(function(){
        lineText.classList.remove('todo__linetext--error');
      }, 1000);

  }
}


todoForm.addEventListener('click', function(evt){
    let type = evt.target;
    evt.preventDefault();
    // console.log(type.className);
    if (type === submitButton) {
        emptyCheck(lineTextTemplayte);
    } else if (type === clearItem) {
        if (document.querySelector('.todo__item')) {
            // let span = document.querySelector('.todo__item-remove');
            // span.parentElement.remove;
            console.log(true)
            return
        } else {
            console.log(false)

        }
    }


});


let buttonClose = '';


const loadPage = (str) => {
    for (let i = 0; i < str.length; i++){
        let li = document.createElement('li');
        li.className = 'todo__item';
        li.innerHTML =  '<span class="todo__num"> – </span> ' + arrTwo[i].title +'.';
        listTasks.appendChild(li);
    }
};




const newItemAdd = (str) => {
    // console.log(count, arrTwo[count - 1].num + ' ' + arrTwo[count - 1].title);

    let li = document.createElement('li');
    li.className = 'todo__item';
    li.id = arrTwo[count - 1].num;
    li.innerHTML =  '<span class="todo__num"> – </span> ' + arrTwo[count - 1].title + '.';

    let span = document.createElement('span');
    span.className = 'todo__item-remove';
    span.innerHTML = 'x';
    listTasks.appendChild(li);
    li.appendChild(span);

    buttonClose = document.querySelector('button');

    // Сбрасывает введенное значение.
    lineText.value = '';

    return;
};




loadPage(arrTwo);
listTasks.addEventListener('click', function(ev1){
    let event1List = ev1.target;
    let delId = event1List.parentElement.id
    // console.log(event1List);
    if (event1List.tagName == 'SPAN') {
        event1List.parentElement.remove();
        // console.log(delId);
        delete arrTwo[delId - 1];
        // loadPage(arrTwo);

    }
});


// clearItem.addEventListener('click', function(rem){
//     remove.preventDefault();
//     // arrTwo.splice(0, arrTwo.length);
//     arrTwo = [];
//     localStorage.clear();
//     document.querySelector('li').remove();
//     newItemAdd(arrTwo);
//     return;
// });
