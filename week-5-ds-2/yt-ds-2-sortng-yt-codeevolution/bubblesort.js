function bubbleSort(arr) {
    do {
        swapped=false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped=true
            }
        }
    }while(swapped)
    return arr
}

const arr=[-2,4,3,-6,9]
let result=bubbleSort(arr)
console.log(result);