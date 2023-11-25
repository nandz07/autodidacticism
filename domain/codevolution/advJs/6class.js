class Person{
    constructor(fname,lname){
        this.firstName=fname
        this.lastName=lname
    }

    sayMyname(){
        return `${this.firstName} ${this.lastName}`
    }
}

let per1=new Person('nanda','kumar')
let res=per1.sayMyname()
console.log(res);

class SuperHero extends Person{
    constructor(fname,lname){
        super(fname,lname)
        this.isSuperhero=true
    }
    fightCrime(){
        console.log(`fight crime`);
    }
}

const batman=new SuperHero('Bruce','wayne')
console.log(batman.sayMyname());
batman.fightCrime()
