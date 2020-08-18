/*const number = 1;
const num2=number;
console.log(num2); //1

-------------------------------------------------

const person ={
    name:'max'
};

const newPerson = person;

console.log(newPerson); // name:'max';

-------------------------------------------------

const person ={
    name:'max'
};

const newPerson = person;

person.name = 'manu';

console.log(newPerson); // name:'manu';//because the value is not copying, but the pointer to that value is copying.

TO OVERCOME THIS SHOW THE EXAMPLE BELOW

-------------------------------------------------

const person ={
    name:'max'
};

const newPerson = {
    ...person//spred operator
};

person.name = 'manu';

console.log(newPerson); // name:'max';*/