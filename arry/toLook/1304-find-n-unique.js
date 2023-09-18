// selef
// var sumZero = function(n) {
//     let i=0
//     const arr=[]
//     if(n%2==0){
//         let t=0-(n/2)-1
//         for(i=0;i<n;i++){
//             t++
//             if(t==0){
//                 t++
//             }
//             arr[i]=t
            
//         }
//     }else{
//         let t=0-Math.floor(n/2)-1
//         for(i=0;i<n;i++){
//             t++
//             arr[i]=t
//         }
//     }
//     return arr
// };

// net o(n)

var sumZero = function(n) {
    if(n==1){
        return [0]
    }
    let newArr = [1]
    let sum = 1;
        for(i=1;i<n-1;i++){
            if(sum > 0){
                newArr.push(-sum)
                sum = 0
            }
            else{
                newArr.push(i)
                sum = i
            }
        
    }
    newArr.push(-sum)
    return newArr
};

let n=4
let res=sumZero(n)
console.log(res);