for(let i=0; i<=10;i++){
    const element=i;
    if(element==5){
      
    }
    // console.log(element)
}

// for(let i=1;i<=10;i++){
// console.log(`outer loop value:${i}`);
// for(let j=1;j<=10;j++){
//     // console.log(`inner loop value${j} and inner loop ${i}`);
//     console.log(i+'*'+j+'='+i*j);
// }
// }


let myArray=["flash","batman","superman"]
// console.log(myArray.length);
// for(let index=0; index<myArray.length; index++){
//     const element=myArray[index];
//     console.log(element);
// }

//break (end) and continue(skip and start) 


// let index = 0
// while(index<=0){
//     console.log(`value of index is ${index}`);
//     index=index+2
// }

let arr=0
while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr=arr+1
}


let score=11

do{
    console.log(`score is ${score}`);
    score++
}while(score<=10);