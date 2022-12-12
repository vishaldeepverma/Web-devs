function calculate(operation) {
  const num1 = +document.getElementById("num1").value; // Number() // parseInt()
  const num2 = +document.getElementById("num2").value;

  // checking if user is providing valid input or not
  if (!num1 || !num2) {
    return alert("Please correct your values");
  }
  if (operation === "add") {
    return (document.getElementById("result").innerHTML = num1 + num2);
  }
  if (operation === "subtract") {
    return (document.getElementById("result").innerHTML = num1 - num2);
  }
  if (operation === "divide") {
    return (document.getElementById("result").innerHTML = num1 / num2);
  }
  if (operation === "multiply") {
    return (document.getElementById("result").innerHTML = num1 * num2);
  }
}

// difference between == and ===
