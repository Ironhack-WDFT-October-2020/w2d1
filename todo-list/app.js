document.querySelectorAll('li').forEach(function (item) {
    item.onclick = toggleTodo;
})

document.querySelector('button').onclick = addTodo;

// document.querySelector('button').addEventListener('click', function () {
//     console.log('clicked');
// })

function addTodo() {
    const input = document.querySelector('input').value;
    const list = document.querySelector('ul');
    const todo = document.createElement('li');
    todo.innerText = input;
    todo.onclick = toggleTodo;
    list.appendChild(todo);
    document.querySelector('input').value = '';
}

function toggleTodo(event) {
    console.log(event);
    // console.log(event.target);
    // event.target.classList.toggle('checked')
    const ul = event.target.parentNode;
    console.log(ul);
    // ul.removeChild(event.target);
}
