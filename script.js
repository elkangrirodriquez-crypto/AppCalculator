const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
const toggle = document.querySelector(".toggle");
const ball = document.querySelector(".ball");

let currentInput = "";
let theme = 1;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "RESET") {
      currentInput = "";
      screen.textContent = "0";
      return;
    }

    if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
      screen.textContent = currentInput || "0";
      return;
    }

    if (value === "=") {
      try {
        currentInput = eval(currentInput.replace("x", "*")).toString();
        screen.textContent = currentInput;
      } catch {
        screen.textContent = "Error";
      }
      return;
    }

    currentInput += value;
    screen.textContent = currentInput;
  });
});

/* Cambio de tema */

toggle.addEventListener("click", () => {
  theme++;
  if (theme > 3) theme = 1;
 
  document.body.classList.remove("theme2", "theme3");
  if (theme === 2) {
    document.body.classList.add("theme2");
    ball.style.left = "23px";
    document.getElementById('ball').style.backgroundColor='#ca5502';
    document.getElementById('toggle').style.backgroundColor='#e5c6b1';
  } else if (theme === 3) {
    document.body.classList.add("theme3");
    document.getElementById('ball').style.backgroundColor='#00e0d1';
    document.getElementById('toggle').style.backgroundColor='#341c4f';
    ball.style.left = "43px";
 } else{
    ball.style.left = "3px";
    document.getElementById('ball').style.backgroundColor='#d51111';
    document.getElementById('toggle').style.backgroundColor='#232c43';
  }
})
