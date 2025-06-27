//immediately invoked function expression (IIFE)
// (function chai(){
//     console.log('DB CONNECTED');
    
// })();
///global scope ke pollution se prblm hoti hi kafi bar to  us  global scope ke variable ya jo b vha  pr  decleration hai uske pollution ko htane ke lie iffe ka use kiaya jata hai

// (  (name)=>{console.log(`db connected ${name}` );
// })('hitesddf')




let val1 =9
let val2 =3
function addNum(num1 ,num2){
    let total  = num1 + num2
    return total

}
let result = addNum(val1,val2)
let result2= addNum(10,2)
