const person=[
    {
        name:'manaf',
        age:23
    },
    {
        name:'abi',
        age:17
    },
    {
        name:'fais',
        age:22
    },
    {
        name:'nandu',
        age:25
    }
]

const result=person.find(person => person.name=='manaf')
// const result=person.find(person => person.name=='manaf').age
console.log(result);