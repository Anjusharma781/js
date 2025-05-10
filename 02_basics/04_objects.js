// const tinderUser =new Object() //songleyon object

const tinderUser ={}
tinderUser.id ="bcd"
tinderUser.name ="sammy"
tinderUser.isLoggegIn =false

// console.log(tinderUser);
const regularUser ={
    email: "user12@gmail.com",
    fullname:{
        firstname: "anshu",
        lastname : "sharma"
    }
}
// console.log(regularUser.fullname.firstname);
// console.log(tinderUser.name);
const obj1 ={1:"a",2: "b"}
const obj2 ={3:"c",4: "b"}
const obj4 ={5:"c",6: "b"}


// const obj3 = Object.assign({},obj1 ,obj2,obj4)

obj3 ={...obj1,...obj2}    //spread opertaor
console.log(obj3);


console.log(Object.entries(tinderUser));
console.log(tinderUser.isLoggegIn);


const course ={
    coursename :"js",
    price: "999",
    courseInstructor:"vishali"
}
// course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);



// {
// 'name': "cjsdhd",
// 'coursename' : "jhn",
// "price": "free"
// 
// }
[
    {},
    {},
    {}
]


