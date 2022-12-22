/*
Object methods, "this"
----------------------

Objects are usually created to represent entities of the real world, like users, orders and so on:

let user = {
  name: "John",
  age: 30
};

And, in the real world, a user can act: 

For a start, let’s teach the user to say hello:

let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

user.sayHi(); // Hello!

Method shorthand
----------------

There exists a shorter syntax for methods in an object literal:

// these objects do the same

user = {
  sayHi: function() {
    alert("Hello");
  }
};

// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function(){...}"
    alert("Hello");
  }
};

“this” in methods
-----------------
To access the object, a method can use the this keyword.

The value of this is the object “before dot”, the one used to call the method.

For instance:

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};

user.sayHi(); // John

“this” is not bound
-------------------

For instance, here the same function is assigned to two different objects and has different “this” in the calls:

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

Arrow functions have no “this”
-----------------------------

Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.
*/
