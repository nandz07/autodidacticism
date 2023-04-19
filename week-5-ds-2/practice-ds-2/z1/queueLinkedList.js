class Node{
    constructor(value){
        this.value=value
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
    getSize(){
        return this.size
    }
    enqueue(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.front=node
            this.rear=node
        }
        else{
            this.rear.next=node
            this.rear=node
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            console.log(`queue is empty`);
            return null
        }
        let dqValue=this.front.value
        this.front=this.front.next
        this.size--
        return dqValue
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

const queue=new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()
queue.dequeue()
queue.print()