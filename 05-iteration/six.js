// reduce

 // accumulator take initial value

 const mynums=[1,2,3]
//  const mytotal=mynums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: $[currval]`)
//     return acc +currval
//  },0)

//OR

const mytotal=mynums.reduce((acc,curr)=>acc+curr,0)

 console.log(mytotal)


 const shoppingcart=[
    {
        itemname:"js course",
        price:3995
    },
     {
        itemname:"py course",
        price:3994
    },
     {
        itemname:"ai course",
        price:3993
    },
     {
        itemname:"ml course",
        price:6499
    }
 ]

 const pricetopay=shoppingcart.reduce((acc,item)=> acc+item.price,0)
 console.log(pricetopay)