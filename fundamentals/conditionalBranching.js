/*
Conditional branching
---------------------

The “if” statement
------------------
The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

For example:

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

Sometimes, we need to assign a variable depending on a condition.

For instance:

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
*/
