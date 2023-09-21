document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");
  
    let currentInput = "";
    let result = 0;
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.textContent === "C") {
          currentInput = "";
        } else if (button.textContent === "=") {
          try {
            result = eval(currentInput);
          } catch (error) {
            result = "Error";
          }
          currentInput = result.toString();
        } else {
          currentInput += button.textContent;
        }
        display.textContent = currentInput;
      });
    });
  });
  
