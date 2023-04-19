class Stack{
    constructor(){
        this.item=[]
    }

    push(element){
        this.item.push(element)
    }

    pop(){
        return this.item.pop()
    }

    peek(){
        return this.item[this.item.length-1]
    }

    isEmpty(){
        return this.item.length===0
    }

    size(){
        return this.item.length
    }

    print(){
        console.log(this.item.toString());
    }
}

const stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.size());
stack.print()

console.log(stack.pop());
stack.print()
console.log(stack.peek());
