// ------- shallow copy -----------

// let person={
//     name:'nandu',age:25
// }
// console.log(`newPerson =>${person.name}`);
// let newPerson=person
// console.log(`newPerson =>${newPerson.name}`);

// newPerson.name='afsal'
// console.log(`newPerson =>${person.name}`);
// console.log(`newPerson =>${newPerson.name}`);

// ---------- Deep copy -------------

// let person={
//         name:'nandu',age:25
//     }
//     console.log(`Person =>${person.name}`);
//     let newPerson=JSON.parse(JSON.stringify(person))
//     console.log(`newPerson =>${newPerson.name}`);
    
//     newPerson.name='afsal'
//     console.log(`Person =>${person.name}`);
//     console.log(`newPerson =>${newPerson.name}`);

//  deep copy can fail for functions in an objects

// so we can use lodash
const lodash = require('lodash');
var employee = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000,
	details: function () {
		return "Employee Name: "
			+ this.ename + "-->Salary: "
			+ this.salary;
	}
}

var deepCopy = lodash.cloneDeep(employee);
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
deepCopy.eid = "E103";
deepCopy.ename = "Beck";
deepCopy.details = function () {
	return "Employee ID: " + this.eid
		+ "-->Salary: " + this.salary;
}
console.log("----------After Modification----------");
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
console.log(employee.details());
console.log(deepCopy.details());

