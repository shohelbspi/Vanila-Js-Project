let user =  [
    {
        name : 'shohel',
        age : 26
    },
    {
        name : 'Sadat',
        age : 1
    },
    {
        name : 'Sompa',
        age : 26
    },
]

let body = document.querySelector('body')

user.map(function(obj){

    let divElem = document.createElement('div')

    divElem.innerHTML = `
        <p>${obj.name}</p>
        <p>${obj.age}</p>
    `

    body.append(divElem)
})


