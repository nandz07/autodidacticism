// let nums1=[1,2,3,4,7,1]
// let nums2=[1,1,6,3,5,1]
// let n=nums1.length
// let m=nums2.length

// for(let i=0;i<nums1.length;i++){
//     let flag=0
//     for(let j=0;j<m;j++){
//         if(nums1[i]==nums2[j]){
//             flag=1
//             // console.log(flag);
//             for(let k=j;k<m;k++){
//                 // console.log(nums2[k]);
//                 nums2[k]=nums2[k+1]
//             }
//             m--
//             j--
//             // console.log(m);
//         }
//     }
//     // console.log(flag);
//     if(flag==1){
//         let temp=nums1[i]
//         let c=1       

//         for(let x=i;x<n;x++){
//             if(nums1[x+1]==temp){
//                 nums1[x]=nums1[x+2]
//                 c++
//             }else{
//                 nums1[x]=nums1[x+1]
//             }
//         }
//         console.log(c);
//         i--
//         n=n-c
//     }
// }
// nums1.length=n
// nums2.length=m
// console.log(nums1);
// console.log(nums2);

var findDifference = function(nums1, nums2) {
    let n=nums1.length
    let m=nums2.length
    for(let i=0;i<nums1.length;i++){
        let flag=0
        for(let j=0;j<m;j++){
            if(nums1[i]==nums2[j]){
                flag=1
                // console.log(flag);
                for(let k=j;k<m;k++){
                    // console.log(nums2[k]);
                    nums2[k]=nums2[k+1]
                }
                m--
                j--
                // console.log(m);
            }
        }
        // console.log(flag);
        if(flag==1){
            let temp=nums1[i]
            let c=1       
    
            for(let x=i;x<n;x++){
                if(nums1[x+1]==temp){
                    nums1[x]=nums1[x+2]
                    c++
                }else{
                    nums1[x]=nums1[x+1]
                }
            }
            console.log(c);
            i--
            n=n-c
        }
    }
    nums1.length=n
    nums2.length=m
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            if(arr1[i]==arr1[j]){
                for(let k=j;k<n;k++){
                    
                }
            }
        }
    }
    return [nums1,nums2]
    };

    let nums1=[1,2,3,3]
    let nums2=[1,1,2,2]
    let res=findDifference(nums1,nums2)
    console.log(res);