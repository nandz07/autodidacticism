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

    isEmplty(){
        return this.item.length==0
    }

    peek(){
        if(!this.isEmplty()){
            return this.item[0]
        }
        return null
    }

    size(){
        return this.item
    }

    print(){
        console.log(this.item.toString());
    }
}

const queue=new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()

console.log(queue.dequeue());
console.log(queue.peek());
queue.print()