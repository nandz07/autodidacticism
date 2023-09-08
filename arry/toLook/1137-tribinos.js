
var tribonacci = function(n) {
    let memo = [0,1,1]
    
    function dp(i) {
        if (i < 3) return memo[i]
        
        if (memo[i] === undefined) {
            memo[i] = dp(i-1) + dp(i-2) + dp(i-3)
        }
        
        return memo[i]
    }

    return dp(n)
};

// var tribonacci = function(n) {
//     let result =[0,1,1]
//     for(let i=3;i<=n;i++){
//         result[i]=result[i-1]+result[i-2]+result[i-3]
//     }
//     return result[n]
// };