
console.log("Hello world");
// variables
// cannot be reserved keyword
// should be meaningful
// can not start with a number
// cannot contain a space or hypen(-)
// case-sensitive
// firstName (camelNotation)
let name='nandu';
console.log(name);
let firstName="Nandakumar"
let secondName="T"

// constant
// cannot reasign value
const intrestRate=0.3;
// intrestRate=1;
console.log(intrestRate);

// primitives

// string , number , boolean , undefined , null
let nam='nandu',age=30,isApproved=false,firstNam=undefined,setColor=null;

// dynamic typing

// type of variable can be change in run time

// objects
 let person={name:"nandu",age:"25"};
console.log(person)

 console.log(person.age);

 console.log(person['name']);

 let change="name"
 console.log(person[change]);

 let na={};
//  na.age=20;
 console.log(na);
 console.log(typeof(na));
 


//  array
let selectColors=['red','blue'];
selectColors[2]=1;
console.log(selectColors);
console.log(selectColors.length);
console.log(typeof(selectColors));

// function

function greet(naam,naam2){
    console.log("hello "+naam+" "+naam2);
    // console.log(" "+naam2);
}
var a=10;
var a=20;
let b=10;
let b=20;

greet("Nandakumar","T");
