var person={
    name:`nandu`,
    age:25,
    place:`mavungal`,
    display:()=>{
        console.log(this.name);
    }
}

person.name='abi'
person.dob=`20-10-2023`
for(x in person){
    console.log(person[x]);
}
person.displayAge=function(){
    console.log(this.age);
}
person.displayAge()
