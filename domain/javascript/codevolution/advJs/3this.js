// make function reusable by letting you decide the object value
// eg from gpt -----------------
// function seyHello(){
//     console.log(`Hello ${this.name}`);
// }

// const personal1 ={
//     name:`Alice`,
//     greet:seyHello
// }
// const personal2 ={
//     name:`Nandakumar`,
//     greet:seyHello
// }

// personal1.greet();
// personal2.greet();

// ----------------

// function sayMyname(name){
//     console.log(`my name is ${name}`);
// }

// sayMyname('nandakumar')

// ---------- implicit

// let personal = {
//     name: 'nanakumar',
//     sayName: function ()  {
//         console.log(`i am ${this.name}`);
//     }
// }

// personal.sayName()


// ------- implicit binding -----------

// eg 
// function ageVerify(){ 
// 	if(this.age> 18){ 
// 		console.log("Yes you can drive"); 
// 	} else { 
// 		console.log("No you cannot drive"); 
// 	} 
// } 

// const per1 = {age: 21}; 
// const per2 = {age: 16}; 
// ageVerify.call(per1); 
// ageVerify.call(per2);

// 

// const myObj={
//     a:1,
//     b:2,
//     c:function (){
//         console.log(this);
//     },
//     d:function(){
//         console.log(this);
//     }
// }
// const jjj={
//     a:1111111,
//     b:222222222222,
    
// }

// const abc=myObj.c
// // abc()
// abc.call(jjj)
// // myObj.c()

//  ---------- default --------
// const age = 22; 
// function verifyAge (){ 
// 	return this.age; 
// } 

// console.log(verifyAge());

// function Person(name){
//     this.name=name
// }
// let p1=new Person('nandakumar')
// let p2=new Person('ironman')
// console.log(p1,p2.name);

// var name='nandakumar'
// globalThis.name='superman'
// function sayMyname(name){
//         console.log(`my name is ${name}`);
//     }
    
//     sayMyname()


// An object can be passed as the first argument to 'call'
// or 'apply' and 'this' will be bound to it.
// const obj = { a: "Custom" };

// // Variables declared with var become properties of 'globalThis'.
// var a = "Global";

// function whatsThis() {
//   return this.a; // 'this' depends on how the function is called
// }
// console.log(whatsThis());
// whatsThis(); // 'Global'; the 'this' parameter defaults to 'globalThis' in non–strict mode
// obj.whatsThis = whatsThis;
// console.log(obj.whatsThis());
// obj.whatsThis(); // 'Custom'; the 'this' parameter is bound to obj

// var age = 22; 
// function verifyAge (){ 
//     return this; 
// } 
  
// console.log(verifyAge());


function greet() {
    console.log(`Hello, ${this.name}!`);
  }
  
  const person = { name: 'John' };
  
//   greet(person); // Output: Hello, John!
person.greet = greet;
person.greet();
