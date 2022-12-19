/*
Logical operators
-----------------
There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing)

The “OR” operator is represented with two vertical line symbols:

result = a || b;


There are four possible logical combinations:

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

Examples:

if (1 || 0) { // works just like if( true || false )
  alert( 'truthy!' );
}

let hour = 9;
if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}

let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}


OR "||" finds the first truthy value
------------------------------------

The falsy values in JavaScript are 0, 0n, null, undefined, false, NaN, and the empty string ""

Given multiple OR’ed values:

result = value1 || value2 || value3;

For instance:

alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)


Use Cases:

Getting the first truthy value from a list of variables or expressions.
----------------------------------------------------------------------
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

Short-circuit evaluation.
------------------------
In the example below, only the second message is printed:

true || alert("not printed");
false || alert("printed");


&& (AND)
--------
The AND operator is represented with two ampersands &&:

result = a && b;

In classical programming, AND returns true if both operands are truthy and false otherwise:

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

AND “&&” finds the first falsy value
------------------------------------


! (NOT)
-------

he boolean NOT operator is represented with an exclamation sign !.

The syntax is pretty simple:

result = !value;


The operator accepts a single argument and does the following:

Converts the operand to boolean type: true/false.
Returns the inverse value


?? (Nullish Coalescing)
-----------------------

The nullish coalescing operator is written as two question marks ??.

The result of a ?? b is:

if a is defined, then a,
if a isn’t defined, then b.

*/
