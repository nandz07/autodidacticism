class SuperHero{
    constructor(name){
        this.name=name
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name=name
    }
}

// module.exports=new SuperHero('superman')

// ----------- above can make bug with so export entair class insted of instense

module.exports=SuperHero