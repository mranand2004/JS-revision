
const mynumbers=[1,2,3,4,5,6,8033,90,10]
// const newnums=mynumbers.map((num)=>{return num+10})
// console.log(newnums)

// chaining
const newnums=mynumbers
                       .map((num)=>num+10)
                       .map((num)=>num+1)
                       .filter((num)=> num>=40)
console.log(newnums)
