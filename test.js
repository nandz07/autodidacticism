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
    enqueu(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.front=newNode
            this.rear=newNode
        }else{
            this.rear.next=newNode
            this.rear=newNode
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            console.log(`queue is empty`);
            return null
        }
        let tem=this.front
        this.front=this.front.next
        this.size--
        tem.next=null
        console.log(`${tem.value} is removed`);
        return tem.value
    }
    print(){
        let curr=this.front
        let list=``
        while(curr){
            list+=` ${curr.value}`
            curr=curr.next
        }
        console.log(list);
    }
    getFront(){
        if(!this.isEmpty()){
            console.log(`${this.front.value} is at front`);
            return this.front.value
        }
    }
}

let queue=new Queue()
queue.enqueu(10)
queue.enqueu(20)
queue.enqueu(30)
queue.print()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.print()
queue.dequeue()
queue.getFront()