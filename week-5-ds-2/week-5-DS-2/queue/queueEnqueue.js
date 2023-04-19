class Queue{
    constructor(){
        this.item=[]
    }
    enqueue(value){
        this.item.push(value)
    }
    isEmpty(){
        return this.item.length===0
    }
    peek(){
        if(!this.isEmpty()){
            console.log(`peek is ${this.item[0]}`);
            return this.item[0]
        }
        return null
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
queue.peek()