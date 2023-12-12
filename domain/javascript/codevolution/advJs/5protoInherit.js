function Person(fname,lname){
    this.fname=fname
    this.lname=lname
}

Person.prototype.getFullName=function(){
    return this.fname + this.lname
}

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