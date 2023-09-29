//withbthe help of call and apply we can manually change the value 
//of this keyword
let details={
    firstname: "arun",
    lastname:"chauhan",
    fullname:function(){
    
        console.log(this.firstname +" "+this.lastname);
    }
}
let person1={
    firstname: "shrey",
    lastname:"gupta",
   age:24

}
let newdetails=details.fullname;
newdetails.call(person1);
//apply method
//there is a difference in call and apply in arguments
//in apply we have to pass arguments in an array
const person = {
    fullName: function(city, country) {
      console.log(this.firstName + " " + this.lastName + "," + city + "," + country);
    }
  }
  
  const person2= {
    firstName:"John",
    lastName: "Doe"
  }
  
  person.fullName.apply(person2, ["Oslo", "Norway"]);
  //bind method
function greet()
{
    console.log(this.firstname + " "+this.lastname);
}
let user={
    firstname: "arun",
    lastname: "chauhan"
}
let greets= greet.bind(user);
greets()