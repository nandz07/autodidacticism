function larg(a){
    let l1=0
    let l2=0
    // console.log(l2);
    for(let i=0;i<arr.length;i++){
        if(l1<a[i]){
            l2=l1
            l1=a[i]
        }
        else if(l2<a[i]){
            l2=a[i]
        }
    }
    console.log(l1);
    console.log(l2);
}

arr=[1,2,3,4,5]
larg(arr)