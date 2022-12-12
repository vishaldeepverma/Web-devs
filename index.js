function calculate(operation) {
  const num1 = +document.getElementById("num1").value; // Number() // parseInt()
  const num2 = +document.getElementById("num2").value;

  // checking if user is providing valid input or not
  if (!num1 || !num2) {
    alert("Please correct your values");
  }
  if (operation === "add") {
    document.getElementById("result").innerHTML = num1 + num2;
  }
  if (operation === "subtract") {
    document.getElementById("result").innerHTML = num1 - num2;
  }
  if (operation === "divide") {
    document.getElementById("result").innerHTML = num1 / num2;
  }
  if (operation === "multiply") {
    document.getElementById("result").innerHTML = num1 * num2;
  }
}

// difference between == and ===
