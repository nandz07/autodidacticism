// function borroing

// const person={
//     name:'nandan',
//     greet:function(){
//         console.log(`hai ${this.name}`);
//     }
// }

// const newPerson={
//     name:'kiran'
// }
// newPerson.greet=person.greet
// newPerson.greet()

// call
// const person1={name:'nandakumar'}
// const person2={name:'kiran'}

// function greet(greet,mark){
//     console.log(`${greet} ${this.name} ${mark}`);
// }

// greet.call(person1,'hai','!')
// greet.call(person2,'poda','**%^')
// greet.apply(person1,['endada','modayano'])

// ------- call function borrowing

const std1={
    name:'nandakumar',
    getname:function (gre,sym){
        console.log(`${gre} ${this.name} ${sym}`);
    }
}
std1.getname('hai','!')

const std2={
    name:'pranav'
}

std1.getname.call(std2,'da','nee shoooperada')
std1.getname.apply(std2,['nee','alle'])

let bindfun=std1.getname.bind(std2,'eda','ithoru bind func aneda')
bindfun()

