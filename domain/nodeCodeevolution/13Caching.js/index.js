// const superhero = require('./superhero');

// console.log(superhero.getName());

// superhero.setName('nandakumar')
// console.log(superhero.getName());

// const hero2=require('./superhero')
// console.log(hero2.getName());

const SuperHero = require("./superhero");

const batsman=new SuperHero('batman')
console.log(batsman.getName());

batsman.setName('nandakumar')
console.log(batsman.getName());

const superman=new SuperHero('superman')
console.log(superman.getName());
