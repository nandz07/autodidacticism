var totalMoney = function(n) {
    let balance=0
    let day=1
    let week=0
    for(let i=1;i<=n;i++){
        balance=balance+(week+day)
        console.log(week);
        day++
        if(i % 7 === 0){
            week++
            day=1
        }
    }
    return balance
    
};

let n=10
let res=totalMoney(n)
console.log(res);