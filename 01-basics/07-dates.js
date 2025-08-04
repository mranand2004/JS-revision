let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025,0,21);//1/21/2025, 12:00:00 AM
// let myCreatedDate = new Date(2025,0,21,5,3);// 1/21/2025, 5:03:00 AM
let myCreatedDate = new Date('2025-01-11'); // ISO format   1/11/2025, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myTimestamp=Date.now();

// console.log(myTimestamp); // 
// console.log(myCreatedDate.getTime()); // 1704931200000

// console.log(Math.floor(Date.now()/1000)); // 1700000000

 let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getMonth()+1);
 console.log(newDate.getDay());


 newDate.toLocaleDateString('default',{
    weekday:"long"
 })
