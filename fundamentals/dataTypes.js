/*

Data types
----------

A value in JavaScript is always of a certain type. For example, a string or a number.

Number
------
let n = 123;
n = 12.345;

The number type represents both integer and floating point numbers.

Infinity represents the mathematical Infinity ∞.
alert( 1 / 0 ); // Infinity

NaN represents a computational error.
alert( "not a number" / 2 ); // NaN, such division is erroneous

BigInt
------
In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.

For example, these two numbers (right above the safe range) are the same:

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992  

A BigInt value is created by appending n to the end of an integer:
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

String
-------
A string in JavaScript must be surrounded by quotes.
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

In JavaScript, there are 3 types of quotes.

Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`

Note: There is no character type.

Boolean (logical type)
----------------------
The boolean type has only two values: true and false.

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

Boolean values also come as a result of comparisons:
let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")

The “null” value
----------------
In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

It’s just a special value which represents “nothing”, “empty” or “value unknown”.

let age = null;

Note: In some case it is compulsory to call a function using arguments but values are not available we use null.

The “undefined” value
---------------------
If a variable is declared, but not assigned, then its value is undefined:

let age;
alert(age); // shows "undefined"

Technically, it is possible to explicitly assign undefined to a variable. But not a good programming practice.

Objects and Symbols
-------------------

The object type is special.

Objects are used to store collections of data and more complex entities.

The typeof operator
The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

*/
