// #primitive datatypes
// types: string ,number ,boolean ,null ,undefined ,symbol,BigInt



const score = 100
 const scoreValue = 100

 const isLoggIn = false
 const outsideTemp =null 
 let userEmail;

 const id = Symbol('123')
const anotherId = ('123')

console.log(id=== anotherId);

const bigNumber =37382993n 



// (non-primitve)//reference type
// array , object , functions 
const heros =['shaktiman ', 'natraj', 'doga']

let myObj=
{
    name : "voish",
    age : 22,
}


 const myfunction=function(){
    // console.log("hello wolrd");
    

}

// stack(Primitive) /Heap(non-primitive:>heap se data vapis lete hai to original value ka reference milta hai)


let myData = "vishsharma4038.com"

let anotherName = myData
anotherName ="anshiiii"
console.log(anotherName);
console.log(myData);


