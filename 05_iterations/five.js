const coding = ['js','cpp',' java' ,' python', ' ruby']
// coding.forEach( function(item){
//     console.log(item);  
// })

// coding.forEach ( (val1) => {
//     console.log(val1);
    
//})

// function printMe (item){
// console.log(item);

// }
// coding.forEach(printMe)

// coding.forEach( (item , index , arr ) => {
//     console.log(item , index , arr);
// })
 const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
     {
        languageName : "java",
        languageFileName : "java"
    },
     {
        languageName : "python",
        languageFileName : "python"
    }
 ]
  myCoding.forEach ( ( item)=> {
    console.log(item .languageName);
    
  })