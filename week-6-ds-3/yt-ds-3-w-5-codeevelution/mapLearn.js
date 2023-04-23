// const myMap=new Map([['name','nandu'],['age',25]])
// console.log(myMap);

// in object key value ket over ride

// const myObj={}
// const a={}
// const b={}

// myObj[a]='a'
// myObj[b]='b'

// console.log(myObj);
// --------------------------------------------
// const a={}
// const b={}
// let c="hai"

// const myMap=new Map([[a,'a'],[b,'b']])

// let ob={
//     a:a,
//     a:b,
//     c:c
// }

// console.log(myMap);
// console.log(ob);

// map can make same key but not in obj
// ------------------------------------------------

// MAP METHODS

const myMap=new Map([[{},'a'],[{},'b'],[1,1]])
myMap.set({},'c')
console.log(myMap.has(1));
myMap.delete(1)
console.log(myMap.has(1));
console.log(myMap);