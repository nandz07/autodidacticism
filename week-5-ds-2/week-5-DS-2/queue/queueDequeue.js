class Queue{
    constructor(){
        this.item=[]
    }
    isEmpty(){
        return this.item.length===0
    }
    front(){
        if(!this.isEmpty()){
            console.log(`front is ${this.item[0]}`);
            return this.item[0]
        }
        return null
    }
    enqueue(value){
        this.item.push(value)
    }
    dequeue(){
        this.item.shift()
    }
    print(){
        console.log(this.item.toString());
    }
}
let queue=new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()
queue.front()
queue.dequeue()
queue.print()
queue.front()