// class maxHeap{
//     constructor(size){
//         this.heapSize=0
//         this.maxSize=size
//         this.arr=new Array()
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     insertKey(value){
//         if(this.heapSize>=this.maxSize){
//             console.log(`over flow`);
//             return null
//         }
//         let i=this.heapSize
//         this.arr[i]=value
//         this.heapSize++
//         while(1!=0 && this.arr[this.parent(i)]<this.arr[i]){
//             [this.arr[this.parent(i)],this.arr[i]]=[this.arr[i],this.arr[this.parent(i)]]
//             i=this.parent(i)
//         }
//     }
//     lChild(i){
//         return 2*i+1
//     }
//     rChild(i){
//         return 2*i+2
//     }
//     maxHeapify(i){
//         let l=this.lChild(i)
//         let r=this.rChild(i)
//         let large=i
//         if(l<this.heapSize && this.arr[l]>this.arr[i]){
//             large=l
//         }if(r<this.heapSize && this.arr[r]>this.arr[i] && arr[r]>this.arr[l]){
//             large =r
//         }
//         if(large!=i){
//             [this.arr[i],this.arr[large]]=[this.arr[large],this.arr[i]]
//             this.maxHeapify(large)
//         }
//     }
//     removeMax(){
//         if(this.heapSize<=0){
//             console.log(`empty`);
//             return null
//         }
//         if(this.heapSize===1){
//             return this.arr[0]
//         }
//         let root=this.arr[0]
//         this.arr[0]=this.arr[this.heapSize-1]
//         this.heapSize--
//         this.maxHeapify(0)
//         return root
//     }
// }



class maxHeap{
    constructor(size){
        this.maxSize=size
        this.heapSize=0
        this.arr=new Array(size)
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    insert(value){
                if(this.heapSize>=this.maxSize){
                    console.log(`over flow`);
                    return null
                }
                let i=this.heapSize
                this.arr[i]=value
                this.heapSize++
                while(1!=0 && this.arr[this.parent(i)]<this.arr[i]){
                    [this.arr[this.parent(i)],this.arr[i]]=[this.arr[i],this.arr[this.parent(i)]]
                    i=this.parent(i)
                }
            }
    lChild(i){
        return 2*i+1
    }
    rChild(i){
        return 2*i+2
    }
    maxHeapify(i){
                let l=this.lChild(i)
                let r=this.rChild(i)
                let large=i
                if(l<this.heapSize && this.arr[l]>this.arr[i]){
                    large=l
                }if(r<this.heapSize && this.arr[r]>this.arr[i] && arr[r]>this.arr[l]){
                    large =r
                }
                if(large!=i){
                    [this.arr[i],this.arr[large]]=[this.arr[large],this.arr[i]]
                    this.maxHeapify(large)
                }
            }
    delete(){
        if(this.heapSize<=0){
            console.log(`no value`);
            return null
        }
        if(this.heapSize===1){
            return this.arr[0]
        }
        let root=this.arr[0]
        this.arr[0]=this.arr[this.heapSize-1]
        this.heapSize--
        this.maxHeapify(0)
        return root
    }
}

// function heapSort(arr){
//     let h=new maxHeap(50)
//     for(let i=0;i<arr.length;i++){
//         h.insert(arr[i])
//     }
//     let s=[]
//     for(let i=0;i<arr.length;i++){
//         s.unshift(h.delete())
//     }
//     return s
// }

// let arr=[8,4,7,5,6]
// let res=heapSort(arr)
// console.log(res);

function heapSort(arr){
    let s=[]
    let h1=new maxHeap()
    for(let i=0;i<arr.length;i++){
        h1.insert(arr[i])
    }
    for(let i=0;i<arr.length;i++){
        s.push(h1.delete())
    }
    return s
}

let arr=[8,6,3,4,5]
r=heapSort(arr)
console.log(r);
