let arr1=[1,2,3,4,7]
let arr2=[1,1,6,3,5,1]
let n=arr1.length
let m=arr2.length

for(let i=0;i<arr1.length;i++){
    let flag=0
    for(let j=0;j<m;j++){
        if(arr1[i]==arr2[j]){
            flag=1
            // console.log(flag);
            for(let k=j;k<m;k++){
                // console.log(arr2[k]);
                arr2[k]=arr2[k+1]
            }
            m--
            j--
            // console.log(m);
        }
    }
    // console.log(flag);
    if(flag==1){
        for(let x=i;x<n;x++){
            arr1[x]=arr1[x+1]
        }
        i--
        n--
    }
}
arr1.length=n
arr2.length=m
console.log(arr1);
console.log(arr2);