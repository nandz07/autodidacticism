const obj = {};

const symbolKey = Symbol('myKey');
const abc=Symbol('myKey')
const regularKey = 'myKey';

obj[symbolKey] = 'This is a symbol key';
obj[regularKey] = 'This is a regular key';
obj[abc] = 'abc';
obj['myKey']='something new'
obj[Symbol('myKey')]='aaaaaaaaaaaaaaaaaaaaa'

console.log(obj[symbolKey]); // Output: This is a symbol key
console.log(obj[regularKey]); // Output: This is a regular key
console.log(obj[abc]); // Output: This is a regular key
console.log(obj); // Output: This is a regular key

console.log(Symbol('myKey')==Symbol('myKey'));