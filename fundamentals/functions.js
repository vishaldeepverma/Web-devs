/*

Functions
---------
Example Function Declaration
function showMessage() {
  alert( 'Hello everyone!' );
}


Local variables
---------------
For example:

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable
  alert( message );
}

showMessage(); // Hello, I'm JavaScript!
alert( message ); // <-- Error! The variable is local to the function

Outer variables
---------------

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John

Parameters
----------
Example:
function showMessage(from, text) { // parameters: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

Default values
--------------
Example:
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given


Returning a value
-----------------
Example:
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3

Note: there may be many occurrences of return in a single function. For instance:

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}

Return without value
--------------------
For example:

function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}
*/
