// var isAnagram = function(s, t) {
//     if(s.length != t.length) {
//         return false;
//     }
    
//     let freq = new Array(26).fill(0);
//     console.log(freq);

//     for(let i = 0; i < s.length; i++) {
//         freq[s.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]++;
//         freq[t.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]--;
//     }
    
//     return freq.every(index => index === 0);
// };
var isAnagram = function(s, t) {
    let map = new Map();
    for(let c of s){
        map.set(c, (map.get(c) | 0) + 1);
    }
    console.log(map);
    for(let d of t){
        if(map.has(d)){
            map.set(d, map.get(d)-1);
            if(map.get(d) === 0){
                map.delete(d)
            }
        } else {
            return false;
        }
    }
    if(map.size === 0) return true;
    else return false;
};

let res=isAnagram('abbc','bca')
console.log(res);
// let freq = new Array(26).fill(0);
//     // console.log(freq);
//     s='abc'
//     rr=s.charAt(0). 
//     console.log(rr);
