const userEmail = []

if (userEmail){
    // console.log("Got User email");
    
}else{
    // console.log("don't get user email");
    
}
 if (userEmail.length===0){
    console.log('aray is empty');
    ////array ko print krvane ke liye use kiya jata hia length 
 }

// falsy value
// false , 0 , -0 , BigInt 0n, "", null , undefined ,NaN

// truthy value
//  "0" , 'false', [],{} , function (){}

 const emptyObj = {}
 if ( Object.keys(emptyObj).length===0){
    console.log('empty object');
    
 }


 //nullish coalescing opeartoir (??): null undefined
 let val1 ;
//  val1 = 5 ?? 10

//   console.log(val1);
  
//terniary opeartor
//  condition ? true : 
const iceTeaPrice = 100
 iceTeaPrice <= 80  ? console.log('less than 80'): console.log('more than 80');
 
 