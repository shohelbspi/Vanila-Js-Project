let taskInput = document.querySelector('#taskInput')
let addBtn = document.querySelector('.addBtn')
let todoContainer = document.querySelector('.todoContainer')
let saveBtn = document.querySelector('.saveBtn')
let editInput = document.querySelector('.editInput')



const API = "https://6a6c5c9a9939b347ccceb789.mockapi.io/api/v1/todos"


fetchData()


async function fetchData() {
    let response = await fetch(API)

    let data = await response.json()

    if (data) {
        todoContainer.innerHTML = ""


        data.forEach(obj => {

            let divElem = document.createElement('div')
            divElem.className = 'todo'

            divElem.innerHTML = `
            <p>${obj.text}</p>
            <div class='buttonContainer'>
                <button class='saveBtn'>Save</button>
                <button class='editBtn'>Edit</button>
                <button class='deleteBtn'>Delete</button>
            </div>
    `
            let deleteBtn = divElem.querySelector('.deleteBtn')

            deleteBtn.addEventListener('click', function () {
                deleteData(obj.id)

            })

            let editBtn = divElem.querySelector('.editBtn')
            let saveBtn = divElem.querySelector('.saveBtn')
            let pElem = divElem.querySelector('p')

            editBtn.addEventListener('click', function () {
                editBtn.style.display = 'none'
                saveBtn.style.display = 'flex'

                let currentText = pElem.innerText 

                pElem.innerHTML = `
                        <input type="text" class="editInput" value="${currentText}" placeholder="Enter Your Task Here">
                    `

            })

            saveBtn.addEventListener('click',function(){
                let editInputValue = pElem.querySelector('.editInput').value.trim()

                if(editInputValue === ''){
                    alert("Task text cannot be empty!")
                    return
                }

                updateData(obj.id,editInputValue)
            })

            todoContainer.append(divElem)

        });
    }
}

async function saveData() {
    let taskInputValue = taskInput.value

    let objData = {
        text: taskInputValue.trim()
    }


    let response = await fetch(API, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(objData)
    })


    if (response.status === 201) {
        fetchData()
    }

    taskInput.value = ""

}

addBtn.addEventListener('click', saveData)



async function updateData(id,newText) {

    let objData = {
        text: newText
    }


    let response = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(objData)
    })


    if (response.status === 200) {
        fetchData()
    }

}

async function deleteData(id) {
    let response = await fetch(`${API}/${id}`, {
        method: 'DELETE',
    })

    if (response.status === 200) {
        fetchData()
    }

}




// todoContainer.addEventListener('click', async function (e) {
//     if (e.target.className === 'deleteBtn') {
//         let id = e.target.getAttribute('data-id')
//         console.log(id);

//         let response = await fetch(`${API}/${id}`, {
//             method: 'DELETE'
//         })

//         if (response.ok) {
//             fetchData() 
//         }

//     }
// })


