const merge = (leftArr,rightArr)=>{
    const sortedArr = []
    while(leftArr.length && rightArr.length){
        sortedArr.push(leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift())
    }
    return [...sortedArr,...leftArr,...rightArr]
    }
    
    const mergeSort = arr =>{
        if(arr.length<2){
            return arr
        }
        const mid = Math.floor(arr.length/2)
        const leftArr = arr.slice(0,mid)
        const rightArr = arr.slice(mid)
        const sortedLeft = mergeSort(leftArr)
        const sortedRight = mergeSort(rightArr)
        return merge(sortedLeft,sortedRight)
    }
    let a = [4,2,6,8,1]
    console.log(mergeSort(a));