function creatFunction(name,age){
    const person={}
    person.name=name
    person.age=age

    person.hello=function(){
        console.log(`hai, i'm ${this.name} age ${this.age}`);
    }
    return person
}

const person1=creatFunction('nandakumar',25)
const person2=creatFunction('kiran',23)
person1.hello()
person2.hello()