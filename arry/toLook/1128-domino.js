// var numEquivDominoPairs = function(dominoes) {
//     let map=new Map();
//     let c=0
//     for(let [a,b] of dominoes){
//         let key=a>b?`${a}${b}`:`${b}${a}`
//         if(map.has(key)){
//             let temp=map.get(key)+1;
//             map.set(key,temp)
//             c+=temp
//         }else{
//             map.set(key,0)
//         }
//     }
//     console.log(map);
//     return c
// };

function numEquivDominoPairs(dominoes) { // Method 1: Count Pairs + One Pass. Time O(n) -> n = dominoes.length Space O(c) -> c = max sum (encoding of 2 dominos) = 100 (2 digits)
    const count = new Array(100).fill(0);
    let ans = 0;
    
    for (const d of dominoes) {
        const i = d[0] < d[1] ? d[0] * 10 + d[1] : d[1] * 10 + d[0];
        ans += count[i];
        count[i]++;
    }
    return ans;
}

let d=[[1,2],[1,2],[1,1],[1,2],[2,2],[2,2],[1,2]]
// let d=[[1,2],[2,1],[3,4],[5,6]]
let res=numEquivDominoPairs(d)
console.log(res);