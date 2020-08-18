/*Spread operator(...):

used to split up array elements or object properties.

const newArray = [...oldArray, 1,2]// all items from 'oldArray' and two new items
const newObject = {...oldObject, newProp:5} 

-------------------------------------------------

Spread operator example:

const numbers = [1,2,3];
const newNumbers = [...numbers, 4,5];

console.log(newNumbers);

const person = {
    name: 'max'
};

const newPerson{
    ...person,
    age: 28
};

console.log(newPerson);

-------------------------------------------------

Rest operator:

Used to merge a list of function arguments into an array
function sortArgs(..args){
    return args.sort()
}

-------------------------------------------------

Rest operator examples:

const filter = (...args) => {
    return args.filter(el => el ===1);
};

console.log(filter(1,2,3));*/