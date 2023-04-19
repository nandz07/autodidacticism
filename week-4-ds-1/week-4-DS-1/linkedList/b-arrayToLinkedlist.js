class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }
        else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }
    arrayToLinkedList(arr){
        for(let i=0;i<arr.length;i++){
            this.append(arr[i])
        }
    }
    print(){
        if(this.isEmpty()){
            console.log(`List is empty`);
        }
        else{
            let curr=this.head
            let listValue=''
            while (curr) {
                listValue+=`${curr.value} `
                curr=curr.next
            }
            console.log(listValue)
        }
    }
}

const list=new LinkedList()
const arr=[1,2,3,4,5]
list.arrayToLinkedList(arr)
list.print()
console.log(list);