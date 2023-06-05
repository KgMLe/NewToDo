const sortList = document.querySelector ("#sort")
const input = document.querySelector("#input")
const addTodo = document.querySelector("#add")
const displayList = document.querySelector ("#displayList")
const edit = document.querySelector ('#edit')
let list = []
//--------------collecting data-------------------------------------------
addTodo.addEventListener ("click", (event) => {
    event.preventDefault()
    if (input.value){
    list.push(input.value)
    input.value = ""
    }
    else{
    
        alert("Please enter what is on your to do list")
    }
    
localStorage.setItem("toDoList", JSON.stringify(list)) //sending to localstorage
});
//--------------------------------------------------------
//--------------displaying data-------------------------------------------
addTodo.addEventListener ("click", (evnt)=>{
evnt.preventDefault()
document.getElementById ("displayList").innerHTML = ""
list.forEach((list)=>{
    document.getElementById ("displayList").innerHTML += `
        <ul>${list}</ul> <button id = "edit" data-toggle="modal" data-target="#exampleModal">EDIT</button>
        <button id = "del">DEL</button>
        `
}) 

localStorage.getItem("toDoList", JSON.stringify(list))
})
//--------------------------------------------------------


// displayList.innerHTML = "";
// showTodo.addEventListener ("click", (e)=>{
//     e.preventDefault()
//     list.forEach((item)=>{
//         document.getElementById ("displayList").innerHTML += `
//             <li>${item}</li>`
//     })
//         localStorage.setItem("toDoList", JSON.stringify(list))



//sorting is done in the following way

sortList.addEventListener ("click", (e)=>{
    e.preventDefault ()
    list.forEach((item)=>{
    document.getElementById ("displayList").innerHTML = ""
    document.getElementById ("displayList").innerHTML += `
    <ul>${list.sort()} </ul> <br> `
    })
    localStorage.setItem("toDoList", JSON.stringify(list))

})

