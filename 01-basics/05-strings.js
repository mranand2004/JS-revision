const name="Anand"
const repo= 50
//console.log(name+repo);

console.log(`hello my name is ${name} and my repo count is ${repo}`);

console.log("----------------------------------");

const gameName=new String('Dwivedi');

console.log( gameName[0])
console.log(gameName.__proto__);

console.log("---------------------------")
console.log(gameName.length)
console.log(gameName.toUpperCase());

console.log("----------------------------")
console.log(gameName.charAt(2))
console.log(gameName.indexOf('w'))

console.log("-----------------");
const newstring=gameName.substring(0,4)
console.log(newstring)
const anotherstring=gameName.slice(-8,4)
console.log(anotherstring)
const newstrings="         Aradhya      ";
console.log(newstrings);
console.log(newstrings.trim())

console.log(name.replace('Anand', 'Ayush'))//replace 
