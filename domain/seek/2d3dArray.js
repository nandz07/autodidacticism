// let arr=[[1,2,3,4,5],[6,7,8,9,10]]
// let b=[]
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         b.push(arr[i][j])
//     }
// }

// console.log(b);



let arr=[
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
]
let temp=[]

console.log(arr[0][0])
for(let i=0 ;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        for(let k=0;k<arr[i][j].length;k++){
            temp.push(arr[i][j][k])
        }
    }
}

console.log(temp);
