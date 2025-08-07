// const coding=["js","ruby","c++"]

// const values =coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values);

//       for.Each value wapas nhi krta



//  filter ye krta hai ki jo condition hm dete hai usi ko
//  bs print krta hai jo condition hoga bs usi ko

const mynums=[1,2,3,4,5,6,8,9,10]
// const newnums=mynums.filter((num) => num>4)

//  or 
// const newnums=mynums.filter((num)=>{
//     return num>4
// })
// console.log(newnums)

const newnums=[]
mynums.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
})
console.log(newnums)