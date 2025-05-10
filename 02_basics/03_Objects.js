//singleton
//ki koi b constuctor se  jb hum bnate hai to singleton bnta hai..ye apni trh ka ek hi object hai

//objects literals

 const mySym = Symbol("key2")
 const jsUser ={name:"vish",
    age:28,
    [mySym]:"chsxkxsmx",
    location:"jaipur",
lastLoginIN:false,
email:'anjusharma788@gmail.com',
lastLoginDays:["monday","tuesday"]}
// console.log(jsUser.email);

// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

jsUser.email ="prmvish@gamil.com"
// console.log(jsUser.email);
// console.log(jsUser);

jsUser.greeting = function(){
    // console.log("hello github");
}
// console.log(jsUser.greeting());

jsUser.greetingTwo= function(){
    console.log(`hlo js useer, ${this.location}`);
    
}
console.log(jsUser.greetingTwo());






