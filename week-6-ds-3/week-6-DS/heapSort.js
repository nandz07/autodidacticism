class MaxHeap{
    constructor(maxSize){
        this.maxSize=maxSize
        this.arr=new Array(maxSize)
        this.heapSize=0
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    lChild(i){
        return 2*i-1
    }
    rChild(i){
        return 2*i-2
    }
    insertKey(x){
         if(this.heapSize===this.maxSize){
            console.log(`over flow`);
            return null
         }
         let i=this.heapSize
         this.arr[i]=x
         this.heapSize++
         while(i!=0 && this.arr[this.parent(i)]<this.arr[i]){
            [this.arr[this.parent(i)],this.arr[i]]=[this.arr[i],this.arr[this.parent(i)]]
            i=this.parent(i)
         }
    }
    remove(){
        
    }
}
let heap=new MaxHeap(50)
heap.insertKey(8)
heap.insertKey(10)
heap.insertKey(15)
heap.insertKey(20)
heap.insertKey(22)
heap.insertKey(18)
heap.insertKey(26)
heap.insertKey(30)
heap.insertKey(40)
heap.insertKey(45)
heap.insertKey(13)
console.log(heap);