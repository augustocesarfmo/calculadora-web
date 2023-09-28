let equation = "";
let errorMessage = false;

function getValue(value) {
  equation += value;
  document.getElementById("display-error-message").style.display = "none";
  document.getElementById("display-value").innerHTML = equation
}

function handleDelete() {
  const result = equation.substring(0, equation.length - 1)
  equation = result

  if (equation.length > 0) {
    document.getElementById("display-value").innerHTML = result
  } else {
    equation = "";
    document.getElementById("display-value").innerHTML = "0"
  }
}

function handleReset() {
  equation = "";
  document.getElementById("display-value").innerHTML = "0"
}

function getResult() {
  try {
    const result = eval(equation) // Return a number
    equation = String(result) // Convert number to string
    
    document.getElementById("display-value").innerHTML = result
  } catch (error) {
    document.getElementById("display-error-message").style.display = "inline-block";
  }
}

document.addEventListener('keydown', function(event) {
  const tecla = event.key;
  // console.log(tecla)
  const calculatorRegex = /[0-9+\-*/().]/;
  
  if(calculatorRegex.test(tecla)) {
    // console.log(tecla);
    document.getElementById(tecla).focus();
    getValue(tecla)
  } else if (tecla === "Backspace") {
    handleDelete()
  }
  
});