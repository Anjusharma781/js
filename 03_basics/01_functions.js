function sayMyName(){
    console.log("v");
    console.log("i");
    console.log("s");
    console.log("h");
}
// sayMyName()

 function addTwoNumbers(number1,number2){
    //  let result =(number1 + number2)
    //  return result
    return number1 +number2
 }
 

 const result = addTwoNumbers(3, 4)
//  console.log("result:", result);



function loginUserMesaage(username){
    if (username===undefined){
        // console.log(`please enter a username`);
  
    }
 return `${username} just logged in`
}
//  console.log(loginUserMesaage())
 


function calculateCartPrice(val1 ,val2 ,...num1){
    return num1
}
//  console.log(calculateCartPrice(200,400,600,899))

 const user ={
    username:"vish",
    price: 889
 }
 function handleObject (anyObject){
    //  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
     
 }
//  handleObject(user)
handleObject({
    username :"aaina",
    price : 399
})
const myNewArray = [200,400,600,3899]
function returnSecondValue (getArray){
 return  getArray[3]
}
console.log(returnSecondValue(myNewArray));

