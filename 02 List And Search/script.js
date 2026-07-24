let userContainer = document.querySelector('.userContainer')
let searchInput = document.querySelector('#searchInput')

const userArray = [
    {
        profileUrl: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Rahim Ahmed",
        email: "sunrise88@gmail.com",
    },
    {
        profileUrl: "https://randomuser.me/api/portraits/men/45.jpg",
        name: "Karim Hasan",
        email: "bluebird21@yahoo.com",
    },
    {
        profileUrl: "https://randomuser.me/api/portraits/women/22.jpg",
        name: "Nusrat Jahan",
        email: "moonlight.dev@gmail.com",
    },
    {
        profileUrl: "https://randomuser.me/api/portraits/women/48.jpg",
        name: "Sadia Akter",
        email: "creativeworld99@outlook.com",
    },
    {
        profileUrl: "https://randomuser.me/api/portraits/men/61.jpg",
        name: "Tanvir Hossain",
        email: "futurecoder2025@gmail.com",
    },
];


function renderUser(arr) {
    userContainer.innerHTML = ''
    arr.map(function (obj) {
        let { profileUrl, name, email } = obj

        let divElem = document.createElement('div')
        divElem.className = 'userItem'

        divElem.innerHTML = `
                    <div class="image">
                        <img src=${profileUrl}
                            alt="error loading image" srcset="">
                    </div>
                    <div class="userDetails">
                        <h3>${name}</h3>
                        <p>${email}</p>
                    </div>
        `

        userContainer.append(divElem)

    })
}

renderUser(userArray)

const handleSearch = function (e) {
    let searchValue = e.target.value.toLowerCase();

    let filteredUser = userArray.filter(function (obj) {
        return (
            obj.name.toLowerCase().includes(searchValue) ||
            obj.email.toLowerCase().includes(searchValue)

        )
    });

    renderUser(filteredUser)
}

searchInput.addEventListener('input', handleSearch)