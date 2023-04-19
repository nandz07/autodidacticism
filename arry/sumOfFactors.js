let sum=1
let i=1
let m=12
let n=24
if(m>n){
    s=n
}else{
    s=m
}

// while(i<=s){
//     if(m%i==0 && n%i==0){
//         sum+=i
//     }
//     i++
// }
// console.log(sum);

// while(m%i==0 && n%i==0){
//     if(i>s){
//         break
//     }
//     sum+=i
//     i++
// }
// console.log(sum);

// -self Logic correct-

for(let i=1;i<s;i++){
    for(let j=2;j<i;j++){
        p=j
        if(n%p==0 && m%p==0){
            console.log(p);
            sum+=p
            n=n/p
            m=m/p
            break
        }
    }
}
console.log(sum);
