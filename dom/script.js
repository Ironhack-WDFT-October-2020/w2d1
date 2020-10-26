
// console.log(document);
// const list = document.getElementById('todo-list');
// console.log(list);


// returns a node list - you can use array methods
console.log(document.querySelector('#todo-list li'))
const allList = document.querySelectorAll('li');
// changing the css styling
allList[3].style.backgroundColor = 'red';
// if you want to use a variable here the same applies as for objects
// allList[3].style[backgroundColor] = 'red';

// get the class(es) of an element
// console.log(allList[3].className)
// remove or add
allList[3].classList.add('d');
allList[3].classList.remove('d');
// toggle - check if d is there -> add it if not remove it
allList[3].classList.toggle('d');

// console.log(allList[3].className)

// set an attribute
allList[3].setAttribute('id', 'first-item');
// console.log(allList[3]);

// we can fix the broken img that way
// document.querySelector('img').setAttribute(
//     'src',
//     'https://images.unsplash.com/photo-1554457945-ba5df6648602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80'
// );

const heading = document.createElement('h1');
heading.innerText = 'My Todo List';
const parentElement = document.querySelector('.todo-container');
const todoList = document.querySelector('#todo-list');
parentElement.insertBefore(heading, todoList);


// console.log(allList);
// allList.forEach(function (item) {
//     console.log(item);
// })
// console.log(allList);

// const todoList = document.querySelector('#todo-list');
// console.log(todoList);

// returns an HTML collection - can be treated like an array
// but is not an array

// const allListItems = document.getElementsByTagName('li');
// allListItems[0].innerText = 'Watch Dark';
// console.log(allListItems[3].innerText);

// const container = document.querySelector('.todo-container');
// const todos = ['watch dark', 'watch devs'];
// let heading = '';
// todos.forEach(function (todo) {
//     heading += `<h1>${todo}</h1>`
// })
// container.innerHTML = heading;


// console.log(container.innerHTML);

// [...allListItems].forEach(function (item) {
//     console.log(item);
// })
// const container = document.getElementsByClassName('todo-container');
// console.log(container[0]);

// console.log(allListItems);
