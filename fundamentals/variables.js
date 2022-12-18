/*
A variable
----------
A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.
To create a variable in JavaScript, use the let keyword.
Example
let message;

Now, we can put some data into it by using the assignment operator =:
let message;
message = 'Hello'; // store the string 'Hello' in the variable named message

The string is now saved into the memory area associated with the variable. We can access it using the variable name:
let message;
message = 'Hello!';
alert(message); // shows the variable content

To be concise, we can combine the variable declaration and assignment into a single line:
Example:
let message = 'Hello!'; // define the variable and assign the value
alert(message); // Hello!

We can also declare multiple variables in one line:
let user = 'John', age = 25, message = 'Hello';

Variable naming
---------------
There are two limitations on variable names in JavaScript:

The name must contain only letters, digits, or the symbols $ and _.
The first character must not be a digit.

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

Case matters
------------
Variables named apple and APPLE are two different variables.

Non-Latin letters are allowed, but not recommended
let имя = '...';
let 我 = '...';

Reserved names
--------------
The code below gives a syntax error:

let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!

An assignment without use strict
// note: no "use strict" in this example
num = 5; // the variable "num" is created if it didn't exist
alert(num); // 5

Constants
---------
To declare a constant (unchanging) variable, use const instead of let:

const myBirthday = '18.04.1982';

Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:

Variables should be named in a way that allows us to easily understand what’s inside them.

*****Note*****
var we will study later.

*/
