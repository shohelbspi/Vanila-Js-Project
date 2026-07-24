let listContainer = document.querySelector('.listContainer')
let addInput = document.querySelector('#addInput')
let addBtn = document.querySelector('.addBtn')


let todoArr = [

]

function randerList(arr) {
    listContainer.innerHTML = ''
    arr.map(function (obj) {
        let divElem = document.createElement('div')
        divElem.classList.add('list')

        divElem.innerHTML = `
        <p>${obj.title}</p>
    `
        let buttonElem = document.createElement('button')
        buttonElem.innerText = '❌'
        divElem.append(buttonElem)

        // buttonElem.onclick = ()=>{
        //     handleRemoveList(obj.id)

        // }

        buttonElem.addEventListener('click',()=>{
            handleRemoveList(obj.id)
        })
        listContainer.append(divElem)
    })
}

randerList(todoArr)

const handleAddBtnClick = function(e){
    let searchValue = addInput.value 

    let obj = {
        id:crypto.randomUUID(),
        title : searchValue
    }
    
    todoArr.unshift(obj)
    randerList(todoArr)
    addInput.value = ''

    
}

function handleRemoveList(id){
    let a = todoArr.filter(obj=>{
        return obj.id !== id
    })
    
    todoArr = a
    
    randerList(todoArr)
}

addBtn.addEventListener('click',handleAddBtnClick)
