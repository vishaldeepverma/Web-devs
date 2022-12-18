/*

Arrow functions, the basics
--------------------------
It’s called “arrow functions”, because it looks like this:

let func = (arg1, arg2, ..., argN) => expression;

In other words, it’s the shorter version of:

let func = function(arg1, arg2, ..., argN) {
  return expression;
};

Let’s see a concrete example:
let sum = (a, b) => a + b;
// This arrow function is a shorter form of:

// let sum = function(a, b) {
//   return a + b;
// };
alert( sum(1, 2) ); // 3


If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

For example:
let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }
alert( double(3) ); // 6

If there are no arguments, parentheses are empty, but they must be present:

let sayHi = () => alert("Hello!");
sayHi();


Multiline arrow functions
-------------------------

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3


Tasks
-----

Question: Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);


 */
