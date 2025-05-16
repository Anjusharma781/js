
const myNums = [1,2,3]
//   const myTotal = myNums .reduce (function ( acc, curval){
//      console.log(` acc ${acc} and curvale ${curval}`);
     
//      return acc + curval
//   },5)
//    console.log(myTotal);
   

  const myTotal = myNums.reduce ( ( acc ,curval)=> acc + curval,2)
  console.log(myTotal);

   const shoopingCart = [
    {
        itemName : ' python course',
        price : 599
    },
     {
        itemName : ' js course',
        price : 299
    },
     {
        itemName : '  mob course',
        price : 2999
    },
   ]
   const priceToPay =shoopingCart. reduce ( ( acc ,item)=> acc + item.price,0)
   console.log(priceToPay);
   