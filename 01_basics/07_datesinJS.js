let myDate = new Date();
// console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCraetedDate = new Date(2025,0,5)
// let myCraetedDate = new Date(2025,0,5,5 ,3)
let myCraetedDate = new Date("2025-01-5")

// console.log(myCraetedDate.toLocaleString());
let myTimeStamp = Date.now()
// console.log(myTimeStamp);


let myDateSystem = new Date();
// console.log(myDateSystem .toLocaleString(10,7,5));
// console.log(myDateSystem.getTime());

// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());

newDate. toLocaleString('default',{
    weekday: "narrow"
})



