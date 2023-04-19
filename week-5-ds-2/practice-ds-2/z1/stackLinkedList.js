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
    getSize(){
        return this.size
    }
    getPeek(){
        return this.peek.value
    }
    push(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.peek=node
        }else{
            node.next=this.peek
            this.peek=node
        }
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            console.log(`atack is empty`);
            return null
        }
        let popElement=this.peek
        this.peek=this.peek.next
        console.log(`${popElement.value} is successfully removed`);
        return popElement
    }
    print(){
        let curr=this.peek
        let stackValue=''
        while (curr) {
            stackValue+=`${curr.value} `
            curr=curr.next
        }
        console.log(stackValue);
    }
}

const stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
stack.pop()
stack.print()
console.log(stack.getPeek());
// console.log(stack);