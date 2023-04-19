class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Stack{
    constructor(){
        this.peek=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    push(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.peek=node
        }else{
            node.next=this.peek
            this.peek=node
        }
        this.size++
    }
    pop(){
        this.peek=this.peek.next
    }
    getPeek(){
        console.log(`peek is ${this.peek.value}`);
        return this.peek.value
        
    }
    print(){
        let stackValue=''
        let curr=this.peek
        while(curr){
            stackValue+=`${curr.value} `
            curr=curr.next
        }
        console.log(stackValue);
    }
}
let stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
stack.getPeek()
stack.pop()
stack.print()
stack.getPeek()