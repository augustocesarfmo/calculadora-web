let equation = "";
let errorMessage = false;

// Works to break the display text line 
const display = document.getElementById('display')
const displayCSS = window.getComputedStyle(display)
display.style.maxWidth = displayCSS.width

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
  if(equation.length === 0) return
  
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
  const calculatorRegex = /[0-9+\-*/().]/;
  
  if(calculatorRegex.test(tecla)) {
    document.getElementById(tecla).focus();
    getValue(tecla)
  } else if (tecla === "Backspace") {
    document.getElementById("<").focus();
    handleDelete()
  } else if (tecla === "=") {
    document.getElementById("=").focus();
    getResult();
  }
});