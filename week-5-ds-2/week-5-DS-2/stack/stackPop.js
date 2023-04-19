class Stack{
    constructor(){
        this.item=[]
    }
    peek(){
        console.log(this.item[0]);
        return this.item[0]
    }
    push(value){
        this.item.unshift(value)
    }
    pop(){
        this.item.shift()
    }
    print(){
        console.log(this.item.toString());
    }
}
let stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
stack.peek()
stack.pop()
stack.print()
stack.peek()