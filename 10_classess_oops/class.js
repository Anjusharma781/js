function setUsername (username){

    //complex db calls
    this.username = username
}
 function  createUser( username,email, password){
  setUsername.call( this,username)

    this. email = email
    this.password = password
 }

 const chai = new  createUser('chai','chai@.com', '123')
 console.log(chai);
       