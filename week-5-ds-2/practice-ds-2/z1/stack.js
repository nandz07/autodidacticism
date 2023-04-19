class Stack{
    constructor(){
        this.item=[]
    }
    isEmpty(){
        return this.item.length===0
    }
    getSize(){
        return this.item
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
    print(){
        console.log(this.item.toString());
    }
}

