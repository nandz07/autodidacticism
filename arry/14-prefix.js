// var longestCommonPrefix = function(arr) {
//     s=Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].length<s){
//             s=arr[i].length
//         }
//     }
//     k=-Infinity
//     for(let i=0;i<s;i++){
//         let f=0
//         console.log(i);
//         for(let j=0;j<arr.length-1;j++){
//             // console.log(arr[j][i]+"->"+arr[j+1][i]);
//             if(arr[j][i]!=arr[j+1][i]){
//                 f=1
//                 break
//             }
//         }
//         if(f!=0){
//             break
//         }else{
//            if(k<i){
//             // console.log(i);
//              k=i
//            } 
//         }
//     }
//     // console.log(k);
//     if (k==0){
//         return false
//     }else{
//         return arr[0].slice(0,k+1)
//     }
// };


var longestCommonPrefix = function(strs) {
    // sort the array because its rearrange alphabetical order
   strs.sort();


  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]){
return strs[0].substr(0, i);
    } 
  }

  return strs[0];  
};
strs = ["flower","flow","flight"]
res=longestCommonPrefix(strs)
console.log(res);