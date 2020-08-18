/*syntax: 

class Person {
    name = 'Max'
    call = () = {...}
}

-------------------------------------------------

usage: 
const myPerson = new Person()
myPerson.call();
console.log(myPerson.name);

-------------------------------------------------

inheritance:

class Person extends Master

-------------------------------------------------

class Human {
  constructor(){
    this.gender = 'male';
  }
  printGender(){
    console.log(this.gender);
  }
}
class Person extends Human {
  constructor(){
    super();// corectly initialise the parent class
    this.name='max';
  }
  
  printMyName(){
    console.log(this.name);
  }
}

const newPerson = new Person();
newPerson.printMyName();
newPerson.printGender();*/