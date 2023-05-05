function Person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("name :"+this.name+" age :"+this.age);
    }
}

var nandu=new Person("nandu",25,"kanhangad")
var abi=new Person("abhijith",25,"mavungal")
nandu.display()
console.log(nandu.place);