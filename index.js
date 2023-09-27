let equation = "";
let errorMessage = false;

function getValue(element) {
  equation += element.value;
  document.getElementById("display-error-message").style.display = "none";
  document.getElementById("display-result").innerHTML = equation
}

function getResult() {
  try {
    const result = eval(equation)
    document.getElementById("display-result").innerHTML = result
  } catch (error) {
    document.getElementById("display-error-message").style.display = "inline-block";
  }
}