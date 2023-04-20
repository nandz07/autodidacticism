// input=arr=[1,2,3,4,5]
// n=2
// o/p=arr[4,5,1,2,3]

let array=[1,2,3,4,5]
j=0
n=2
while (j<n) {
    temp=array[array.length-1]
    for (var i = array.length-1; i >0; i--) {
        array[i]=array[i-1]
    }
    array[i]=temp
    j++
}
console.log(array);