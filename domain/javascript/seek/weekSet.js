let weakSet=new WeakSet()
let obj1={name:'nandakumar'}
let obj2={name:'kiran'}

weakSet.add(obj1)
weakSet.add(obj1)
weakSet.add(obj2)

console.log(weakSet.has(obj1));
console.log(weakSet.has(obj2));
weakSet.delete(obj2)

obj1=null
console.log(weakSet.has(obj1));
console.log(weakSet.has(obj2));

// presence of an object in a WeakSet does not prevent the object from being garbage 
// collected if there are no other references to it.
console.log(`------------------------------------`);
let weakSet2=new WeakSet()
let Set2=new Set()

( function () {
let obj1={name:'nandakumar'};
Set2.add(obj1);
Set2.has(obj1);
})();
// weakSet2.has(obj1)

let arr=[1,2,3]
let set=new WeakSet()
set.add(arr)
console.log(set.has(arr));
arr=null
console.log(set.has(arr));


