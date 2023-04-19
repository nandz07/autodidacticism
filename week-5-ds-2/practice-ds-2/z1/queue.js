class Queue{
    constructor(){
        this.item=[]
    }
    enqueue(element){
        this.item.push(element)
    }
    dequeue(){
        return this.item.shift()
    }
    isEmpty(){
        return this.item.size
    }
    peek(){
        if(!this.isEmpty()){
            return this.item[0]
        }
        return null
    }
    size(){
        return this.item.length
    }
    print(){
        console.log( this.item.toString());
    }
}

const queue=new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()
queue.dequeue()
queue.print()
