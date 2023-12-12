// A function that take another function as argument and return a function as a value


const radius=[2,4,6,8]

// const calculateArea=(radius)=>{
//     const output=[]
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI * radius[i]*radius[i])
//     }
//     return output
// }
// const calculateDiameter=(radius)=>{
//     const output=[]
//     for(let i=0;i<radius.length;i++){
//         output.push(2*radius[i])
//     }
//     return output
// }

// console.log(calculateArea(radius));
// console.log(calculateDiameter(radius));


const area=(radius)=>{
    return Math.PI* radius*radius
}
const diameter=(readius)=>{
    return readius * 2
}

const calculate=(radius,logic)=>{
    const output=[]
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius,area));
console.log(calculate(radius,diameter));