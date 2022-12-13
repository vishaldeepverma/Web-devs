/*
2.1 hello world

There are two ways to include js in your web page
1. Internal
2. External

In case of internal js within the script tag we write all our javascript code.
In case of external js we provide src attribute to script tag

Example of internal javascript
------------------------------
<!DOCTYPE HTML>
<html>
<body>
  <p>Before the script...</p>
  <script>
    alert( 'Hello, world!' );
  </script>
  <p>...After the script.</p>
</body>
</html>

Example of External javascript
------------------------------
<script src="/path/to/script.js"></script>

***** Important Questions *****

Question: What happens if we use external js and at the same time we write javascript code inside script tag?
Answer: js code within the script tag will be ignored

Task: Using javascript show an alert on browser
Task: Show an alert with an external script

*/
