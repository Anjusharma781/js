class user{
    constructor(username){
        this.username= username
    }
  
  logme(){
    console.log(`USERNAME is ${this.username}`);
    
  }
}
 class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password= password
    }
    addaCourses (){
        console.log(` A new course was added by ${this.username}`);
        
    }
 }
  const chai =  new Teacher ('chai','chai@gmail.com','123')
  chai.addaCourses() 
  chai.logme() 
  const maslaChai = new user ('masalachai')

  maslaChai.logme()
   console.log(chai instanceof user);
   