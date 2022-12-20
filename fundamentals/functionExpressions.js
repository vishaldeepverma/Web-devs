/*
Function expressions
--------------------

The syntax that we used before is called a Function Declaration:

function sayHi() {
  alert( "Hello" );
}

There is another syntax for creating a function that is called a Function Expression.

It allows us to create a new function in the middle of any expression.

For example:

let sayHi = function() {
  alert( "Hello" );
};

Function is a value
-------------------

We can even print out that value using alert:

function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // shows the function code

Callback functions
------------------

The function should ask the question and, depending on the user’s answer, call yes() or no():

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

The arguments showOk and showCancel of ask are called callback functions or just callbacks.

We can use Function Expressions to write an equivalent, shorter function:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

Function Expression vs Function Declaration
-------------------------------------------

A Function Expression is created when the execution reaches it and is usable only from that moment.
A Function Declaration can be called earlier than it is defined.

 */
