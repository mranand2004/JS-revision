// let myName="Anand Dwivedi  "

// console.log(myName.trueLength);


let myheroes=["Rohit","Pawan"]

let heropower={
    Rohit:"Hammer",
    Pawan:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Pawan}`);
    }
}

Object.prototype.Anand=function(){
    console.log(`Anand is present in all objects`);
}

heropower.getSpiderPower();   // calls object method
heropower.Anand();            // from Object prototype
myheroes.Anand();             // from Object prototype


//  Inheritance


const User={
    name:"Anand",
    Title:'Dwivedi'
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:"JS assignment",
    fullTime:true,
    __proto__:TeachingSupport
}


Teacher.__proto__=User

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)
//setPrototype:- Sets the prototype of a specified object to object proto or null. returns the object o.




console.log("----------------------")
let anotherusername="ayush  "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length}`);

}

anotherusername.trueLength()