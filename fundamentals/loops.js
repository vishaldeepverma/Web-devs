/*

The “while” loop
-----------------

The while loop has the following syntax:
while (condition) {
  // code
  // so-called "loop body"
}

Example:
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

Curly braces are not required for a single-line body
example:
let i = 3;
while (i) alert(i--)

The “do…while” loop
-------------------
The condition check can be moved below the loop body using the do..while syntax:

do {
  // loop body
} while (condition);

Example:
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

The “for” loop
--------------
It looks like this:

for (begin; condition; step) {
  // ... loop body ...
}
Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...

Example: 
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

Skipping parts
--------------

let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}

We can also remove the step part:
let i = 0;

for (; i < 3;) {
  alert( i++ );
}

Question: This code works fine. We run into infinite loop
for (;;) {
  // repeats without limits
}


Breaking the loop
-----------------

Example: Breaking while loop
let sum = 0;
while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break; // (*)
  sum += value;
}
alert( 'Sum: ' + sum );

Example: Breaking for loop
for(let i=0;i<10;i++){
  if(i === 5){
    break;
  }
  console.log(i);
}

Continue to the next iteration
------------------------------
Example for loop:
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}


Labels for break/continue
-------------------------
outer:for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if(i==2){
      break outer;
    }
    console.log(i+":"+j);
  }
}

*/
