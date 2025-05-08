// array****************

// arrays  copies-operations create shallow copies.
//shallow copies..of an object is a copy whosw properties share the same refernces
//deep copy ...properties do not share the same reference

const myArr = [0,4,5,6,9,7];
const myHeros =['shakitman ','naagraj']
 const myArr2 = new Array(1,2,3,4,)
//  console.log(myArr2[1]);
 
//  array metohds
//1..
// myArr.push(66) //values add
// myArr.pop() //remove the laxt elemenr of array and returns it..
// myArr.unshift(10)
// myArr.shift()
// console.log(myArr.includes(8));


// const newArr =myArr.join()
// console.log(typeof newArr);

// console.log(myArr);


//slice or, splice
console.log("a", myArr);

const n1= myArr.slice(1,3)
console.log(n1);

console.log("B", myArr);

const num2= myArr.splice(1,3)
//original array ko maniupluate krta hai
console.log("C", myArr);
console.log(num2);






