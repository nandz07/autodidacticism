const arr=[
    {firstName:'nandakumar',lastName:'T',age:26},
    {firstName:'giri',lastName:'krishna',age:21},
    {firstName:'muhammad',lastName:'abbrar',age:22},
    {firstName:'rohith',lastName:'k',age:24},
]

// let res=arr.filter(cv=>cv.age<24).map(cv=>`${cv.firstName} ${cv.lastName} is ${cv.age} year old`)
// console.log(res);

// let res=arr.reduce((acc,cv)=>{
//     if(cv.age<24){
//         acc.push(`${cv.firstName} ${cv.lastName} is ${cv.age} year old`)
//     }
//     return acc
// },[])

let res=arr.reduce((acc,cv)=> cv.age<24?[...acc,`${cv.firstName} ${cv.lastName} is ${cv.age} year old`]:acc,[])

// const res = arr.reduce((acc, cv) => cv.age < 24 ? [...acc, `${cv.firstName} ${cv.lastName} is ${cv.age} years old`] : acc, []);

console.log(res);