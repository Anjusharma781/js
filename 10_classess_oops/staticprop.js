class user {
    constructor(username){
        this.username = username
    }
     logme(){
        console.log(`username${this.username}`);
        
     }

  static createId(){
    return `123`
 }  
}

const vishali = new user ('vishali')

// console.log (vishali.createId())
 class student extends user {
    constructor( username,email){
         super(username)
        this.email = email

    }
 }
 const iphone =  new student( ' iphone', ' i@gmail.com')
   iphone.logme()
   