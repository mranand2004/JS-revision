const coding=["js","ruby","c++"]


// coding.forEach(function(val){
//     console.log(val)
// })

//or

// coding.forEach((item)=>{
//     console.log(item);
// })


// or

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item, index, arr);
})

const mycoding=[
    {
        languagename:"JavaScript",
        languagefilename:"js"
    },

    {
        languagename:"Java",
        languagefilename:"java"
    },

    {
        languagename:"cpp",
        languagefilename:"cpp"
    },

    {
        languagename:"html",
        languagefilename:"html"
    },
]

mycoding.forEach((item)=>{
    console.log(item.languagename);
})

