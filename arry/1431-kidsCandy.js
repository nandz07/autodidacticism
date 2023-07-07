// var kidsWithCandies = function(candies, extraCandies) {
//     l=candies[0]
//     for(let i=0;i<candies.length;i++){
//         if(candies[i]>l){
//             l=candies[i]
//         }
//     }
//     newArray=[]
//     for(let i=0;i<candies.length;i++){
//         console.log(candies[i]+extraCandies)
//         if(candies[i]+extraCandies>=l){
//             newArray[i]=true
//         }else{
//             newArray[i]=false
//         }
//     }
//     return newArray
// };

// site
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies=Math.max(...candies);
    const result=[];
    for(let i=0;i<candies.length;i++){
     result[i]=candies[i] + extraCandies >= maxCandies;
    }
    return result;
};
let arr=[2,3,5,1,3]
res=kidsWithCandies(arr,3)
console.log(res);