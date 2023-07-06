// my sample
// var maxProfit = function(prices) {
//     let mp=0,cp=0;
//     for(let i=0;i<prices.length;i++){
//         for(let j=i+1;j<prices.length;j++){
//             if(prices[j]>prices[i]){
//                 cp=prices[j]-prices[i]
//             }
//             if(mp<cp){
//                 mp=cp
//             }
//         }
//     }
//     return mp
// };

// site
// var maxProfit = function(prices) {
//     let left=0
//     let right=1
//     let maxProfit=0
//     while(right<prices.length){
//         if(prices[right]>prices[left]){
//             let currProfit=prices[right]-prices[left]
//             maxProfit=Math.max(currProfit,maxProfit)
//         }else{
//             left=right
//         }
//         right++
//     }
//     return maxProfit
// };


// site 2
// var maxProfit = function(prices) {
//     let maxProfit = 0;
//     let minPrice = Number.MAX_SAFE_INTEGER;

//     for (let i = 0; i < prices.length; i ++) {
//         if (prices[i] < minPrice) {
//             minPrice = prices[i];
//         } else if (prices[i] - minPrice > maxProfit) {
//             maxProfit = prices[i] - minPrice;
//         }
//     }

//     return maxProfit;
// };

var maxProfit = function(prices) {
    let maxProfit=0
    let minPrice=Number.MAX_SAFE_INTEGER

    for(let i=0;i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice=prices[i]
        }else if(prices[i]-minPrice>maxProfit){
            maxProfit=prices[i]-minPrice
        }
    }
    return maxProfit
};
let arr=[7,1,5,3,6,4]
let res=maxProfit(arr)
console.log(res);