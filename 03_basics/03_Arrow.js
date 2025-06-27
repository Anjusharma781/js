 const user ={
    username :"vishali", 
    price :999,
    welcomeMesseage : function(){
        console.log(`${this.username}, welcome to website`); ////this current context ko refer krta hai
        
    }

 }
//  user.welcomeMesseage()

// function tea(){
//     let username ="hiti"
//     console.log(this.username);
    
// }
// tea()

// const tea = function(){
//       let username ="hiti"
//    console.log(this.username);
// }

// const tea = ()=>{
//       let username ="hiti"
//    console.log(this);
// }

// tea ()

//  const addTwoNumber = (num1 ,num2) => {
//     return num1 + num2
//  }

// const addTwoNumber = (num1 ,num2) =>  num1 + num2 //emplicit return
//  const addTwoNumber = (num1 ,num2) =>  (num1 + num2)
 const addTwoNumber = (num1 ,num2) => ({username: "iti"})

 console.log(addTwoNumber(9,9));
 