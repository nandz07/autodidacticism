// var average = function(salary) {
//     let max=salary[0]
//     let min=salary[0]
//     for(let i=1;i<salary.length;i++){
//         if(salary[i]>max){
//             max=salary[i]
//         }
//         if(salary[i]<min){
//             min=salary[i]
//         }
//     }
//     let sum=0
//     for(let i=0;i<salary.length;i++){
//         if(max!=salary[i] && min !=salary[i]){
//             sum+=salary[i]
//         }
//     }
//     let avg=sum/(salary.length-2)
//     return avg
// };

// optimized solution with O(n) time

var average = function(salary) {
    let val=0;
    let max= -Infinity;
    let min= Infinity;
    for(let el of salary){
        val+=el;
    max<el?max=el:max=max;
    min>el?min=el:min=min
    }

 let ans= val-(max+min);
 ans= ans/(salary.length-2);
 return ans
};

let salary=[4000,3000,1000,2000]
let res=average(salary)
console.log(res);