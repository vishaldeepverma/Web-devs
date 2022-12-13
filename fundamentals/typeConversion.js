/*
2.2 Type Conversions
    
String Conversion 
-----------------
Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

Numeric Conversion
------------------
Occurs in math operations. Can be performed with Number(value).
Value	Becomes…
undefined	NaN
null	0
true / false	1 / 0
string	The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.


Boolean Conversion 
-------------------
Occurs in logical operations. Can be performed with Boolean(value).
Value	Becomes…
0, null, undefined, NaN, ""	false
any other value	true

*****Note*****
Objects aren’t covered here. We’ll return to them later in the chapter Object to primitive conversion that is devoted exclusively to objects after we learn more basic things about JavaScript

*/
