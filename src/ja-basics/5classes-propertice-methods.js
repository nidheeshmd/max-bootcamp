/*in ES7 we do not need a construction to asign a value to objects.

myPropert = 'value'

this is enough

-------------------------------------------------

from the example from 'classes.txt'

class Human {
    gender = 'male';
  printGender = () => {
    console.log(this.gender);
  }
}
class Person extends Human {
    name='max';
  printMyName = () => {
    console.log(this.name);
  }
}

const newPerson = new Person();
newPerson.printMyName();
newPerson.printGender();*/