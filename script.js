// All my constants!!!!
const display = document.getElementById("display");
const NumberButtons = document.getElementsByClassName("num");
const equals = document.getElementById("equals");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const opButtons = [divide, multiply, subtract, add];
const stack = [];

// Number buttons
for (let button of NumberButtons) {
  button.addEventListener("click", () => {
    display.value += button.textContent;
  });
}

// Operator buttons
divide.addEventListener("click", () => {
  stack.push(display.value);
  stack.push("/");
  clearDisplay();
  divide.style.background = "yellow";
});

multiply.addEventListener("click", () => {
  stack.push(display.value);
  stack.push("*");
  clearDisplay();
  multiply.style.background = "yellow";
});

subtract.addEventListener("click", () => {
  stack.push(display.value);
  stack.push("-");
  clearDisplay();
  subtract.style.background = "yellow";
});

add.addEventListener("click", () => {
  stack.push(display.value);
  stack.push("+");
  clearDisplay();
  add.style.background = "yellow";
});

equals.addEventListener("click", () => {
  stack.push(display.value);
  resetOpButtons();
  calcStack();
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  clearDisplay();
  stack.length = 0;
  resetOpButtons();
});

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Reset operator buttons
function resetOpButtons() {
  for (let btn of opButtons) btn.style.background = "";
}

// Calculate stack
function calcStack() {
  let num1 = stack.pop();
  let op = stack.pop();
  let num2 = stack.pop();

  if (op === "+") display.value = Number(num2) + Number(num1);
  if (op === "-") display.value = Number(num2) - Number(num1);
  if (op === "*") display.value = Number(num2) * Number(num1);
  if (op === "/") display.value = Number(num2) / Number(num1);
}
