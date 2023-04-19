class Stack{
    constructor(){
        this.item=[]
    }
    push(value){
        this.item.unshift(value)
    }
    print(){
        console.log(this.item.toString());
    }
    peek(){
        return this.item[0]
    }
}

let stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
console.log(stack.peek());