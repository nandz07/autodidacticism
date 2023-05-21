const arr=[1,2,3,4,5]

const res =arr.every(isPositive)

function isPositive(item){
    return item>0
}
console.log(res);

const person=[
    {
        name:'fais'
    },
    {
        name:'manaf'
    },
    {
        name:'irfan'
    },
    {
        surname:'nusair',
        // name:''
    },
]

const resl=person.every(person => person.name!==undefined)
console.log(resl);

const  arra=[
    [1,2,3],
    [1,2,3],
    [1,2,3],
    '123'
]


let result=arra.every(item=>Array.isArray(item))
console.log(result);