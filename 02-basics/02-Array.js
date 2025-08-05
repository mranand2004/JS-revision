const mar_heroes=["thor", "ironman","spiderman"]
const dc_heros=["superman","flash","batsman"]
// mar_heroes.push(dc_heros)
// console.log(mar_heroes)

// console.log(mar_heroes[3][1])

const all_heros=mar_heroes.concat(dc_heros)
// console.log(all_heros)

//or
const all_new_heros=[...mar_heroes, ...dc_heros]
// console.log(all_new_heros)

// rare case

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array=another_array.flat(infinity)

// console.log(real_another_array)

console.log(Array.isArray("Anand"))
console.log(Array.from({name:"Anand"}))


let score1=100;
let score2=300;
let score3=300;
console.log(Array.of(score1,score2, score3))
