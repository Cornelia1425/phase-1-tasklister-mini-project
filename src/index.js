document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //document.querySelector('form').addEventListener('submit', (e) =>{
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    // console.log(e);
    e.preventDefault()
    buildToDo(e.target["new-task-description"].value)//.value)
    form.reset()
  })
})

function buildToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  //p.textContent = todo
  p.textContent = `${todo} `//add a bit space after the run text
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list-container').appendChild(p)
 }

// delete the list using x button
 function handleDelete(e){
  e.target.parentNode.remove()

 }