const obj = [
    {
        name:'shohel',
        age:28,
        gender: 'male'
    },
    {
        name:'sompa',
        age:28,
        gender: 'female'
    },
    {
        name:'sajiya',
        age:0,
        gender: 'female'
    },
    {
        name:'Rongon',
        age:27,
        gender: 'male'
    },
    {
        name:'Rakib',
        age:27,
        gender: 'male'
    },
]

const males = obj.filter(function(element) {
    return element.gender === "male";
});

console.log(males);