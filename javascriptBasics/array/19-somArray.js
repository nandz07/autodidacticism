let arr=[1,2,3,4,5]

let res=arr.some(greaterThanFour)

function greaterThanFour(item){
    return item>4
}
console.log(res);

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

const result=person.some(person => person.age<18)
console.log(result);