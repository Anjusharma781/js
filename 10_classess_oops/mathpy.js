 const descripter =Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(Math.PI);
 console.log(descripter);

 
//   Object. create()
 const chai = { name : 'ginger chai',
    price :250 ,
    isAvailable :  true

 } 
 console.log(Object.getOwnPropertyDescriptor(chai , 'name'));


  Object. defineProperty(chai , ' name',{
 writable: false,
  enumerable: false
  
  })
// console.log(Object.getOwnPropertyDescriptor(chai , 'name'));
for(let [key , value] of Object.entries(chai)){
   console.log(`${key}: ${value}`);
   
}

 
