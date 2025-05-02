// console.log("2" >1);
// console.log("02">1);

// pariorty must be clean code
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// the reason is that an equality check == and comparison > <>= <= work differently.
// compariosn convert null to  a nubaer ,treating it as 0. that's why (3)null >=0 is true and  (1)null> 0 is false.

// (===) strick check