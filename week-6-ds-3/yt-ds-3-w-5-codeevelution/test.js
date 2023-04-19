let n=1221
l=0;
t=n
f=0
while(t!=0){
    console.log(t);
    t=Math.floor(t/10)
    l++
}
if(l%2==0){
    // l=l+1
}
console.log(l);
for(let i=1,j=l-i;i<=l/2;i++,j--){
    console.log(n%10**i);
    // console.log(i);
    console.log(Math.floor(n/10**j));
    // console.log(j);
    if(n%10**i!=Math.floor(n/10**j)){
        f=1
        break
    }
}
if(f==0){
    console.log("true");
}else{
    console.log("false");
}