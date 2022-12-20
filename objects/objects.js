/*
Objects
-------
As we know from the chapter Data types, there are eight data types in JavaScript. Seven of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).

An empty object (“empty cabinet”) can be created using one of two syntaxes:

let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

Literals and properties
---------------------------
We can immediately put some properties into {...} as “key: value” pairs:

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

We can also use multiword property names, but then they must be quoted:
-----------------------------------------------------------------------

let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

Square brackets
----------------

// this would give a syntax error
user.likes birds = true

There’s an alternative “square bracket notation” that works with any string:

let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

Computed properties
-------------------

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

Property value shorthand
------------------------

For instance:

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

Property names limitations
--------------------------


// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6

In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).


There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:

let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

As we see from the code, the assignment to a primitive 5 is ignored.

Property existence test, “in” operator
--------------------------------------

let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"


hasOwnProperty()
----------------

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true

console.log(object1.hasOwnProperty('toString'));
// expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// expected output: false


The "for..in" loop
------------------

To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before.

The syntax:

for (key in object) {
  // executes the body for each key among object properties
}

For instance, let’s output all properties of user:

Example:

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

Ordered like an object
----------------------
Are objects ordered? The short answer is: “ordered in a special fashion”

As an example, let’s consider an object with the phone codes:

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}


*/
