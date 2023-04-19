class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Queue{
    constructor(){
        this.front=null
        this.rear=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    enqueue(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.front=node
            this.rear=node
        }else{
            this.rear.next=node
            this.rear=node
        }
        this.size++
    }
    dequeue(){
        let remove=this.front
        this.front=this.front.next
        remove.next=null
        this.size--
    }
    getFront(){
        if(!this.isEmpty()){
            console.log(`Front of queue is ${this.front.value}`);
            return this.front.value
        }
        return null
    }
    print(){
        let curr=this.front
        let queueValue=''
        while(curr){
            queueValue+=`${curr.value} `
            curr=curr.next
        }
        console.log(queueValue);
    }
}
let queue=new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()
queue.getFront()
queue.dequeue()
queue.print()
queue.getFront()