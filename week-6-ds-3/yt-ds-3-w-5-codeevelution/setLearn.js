// const myArray=[1,2,3,4,5,6,2,1,4,4,5,6]
// const mySet=new Set(myArray)

// console.log(myArray);
// console.log(mySet);

// let uniqarray=[...mySet]
// console.log(uniqarray);

const myArray=[1,2,3,4,5]
const mySet=new Set(myArray)
mySet.add(6)
mySet.add('6')
mySet.add('6')//copy not allowed in set
mySet.add({name:'nandu'})
mySet.add([1,2,3,4])
mySet.delete(3)
console.log(mySet);
console.log(mySet.has(6));
console.log(mySet.has(30));
console.log(mySet.size);
// mySet.clear()
console.log(mySet);//get an empty set

// diff bw array and set

// array is an orederd list of object

// set is an un order list cant access by an index value


console.log(myArray[3]);
console.log(mySet[3]);
console.log(mySet);

const letters = new Set([1,2,3,4,5]);

// List all entries
let text = 0;
letters.forEach (function(value) {
  text += value;
})
console.log(text);

