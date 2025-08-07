const arr =[1,2,3,4,5]

for (const num of arr){
    // console.log(num);
}

const greetings="hello world!"
for(const greet of greetings){
    // console.log(`each char is ${greet}`)
}

// const map =new Map()
// map.set('IN',"INDIA")
// map.set('USA',"United States of America")
// map.set('Fr',"France")

// console.log(map);

// for(const[key,value] of map){
//     console.log(key,':-', value);
// }

// const myObject={
//     'game1':'NFS',
//     'game2':'spiderman'
// }
// for(const[key,value] of myObject){
//     console.log(key,':-', value);
// }

const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
}

for(const key in myObject){
    // console.log(myObject[key]);
     console.log(`4{key} shortcut is for ${myObject[key]}`);
}

const programming=['js','rb','py','java','cpp']
for(const key in programming){
    console.log(programming[key]);
}

// const map =new Map()
// map.set('IN',"INDIA")
// map.set('USA',"United States of America")
// map.set('Fr',"France")

// for(const key in map){
//     console.log(key);
// }

// map ius not iteratable

