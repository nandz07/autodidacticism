// constructor function
function Person(fname,lname){
    this.fname=fname
    this.lname=lname
}

let person1=new Person('abhijith',' I V')
person1.getFullName=function(){
    console.log(this.fname + this.lname);
}
person1.getFullName()
let person2=new Person('anagha',' C H')
// person2.getFullName() // will give erro 
//  so with the help  of prototype we can apply new filed to constructor funciton
Person.prototype.getFullName=function(){
    console.log(this.fname + this.lname);
    // console.log(this.fname + this.lname);
}
person2.getFullName() 

// ------------ inheritance -----------------

function SuperHero(fname,lname){
    Person.call(this,fname,lname)
    this.isSuperHero=true
}

SuperHero.prototype.fightCrime=function(){
    console.log(`Fight crime`);
}

SuperHero.prototype=Object.create(Person.prototype)
const batman=new SuperHero('nanda','kumar')
console.log(batman.getFullName());