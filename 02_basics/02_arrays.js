const marvel_heros =["thor","ironman","spiderman"] 
const dc_heros =["superman","flash","batman"] 

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const all_Heros= marvel_heros.concat(dc_heros)
// console.log(all_Heros);


const all_new_heros =[...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const another_arr =[1,2,3,[4,5,6],7,[6,7,[7,8]]]
let real_another_array = another_arr.flat(Infinity)
console.log(real_another_array);

console.log( Array.isArray("anmol"));
 console.log( Array.from("anmol"));
 console.log(Array.from({name:"vishali"})); //intersting

 let Score1 =1100
 let Score2 =1200
 let Score3 =1300
 console.log(Array.of(Score1,Score2,Score3));
 


 
 


