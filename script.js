const nmbs = document.querySelectorAll("#number");
const currentInput = document.querySelector(".currentInput");
const currentOutput = document.querySelector(".currentOutput");
const opr = document.querySelectorAll("#opr");
const equal = document.querySelector("#equal");
const aclear = document.querySelector("#aclear");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");

let nr1 = "";
let nr2 = "";
let sign = "";
let rez = "";

for (let i = 0; i < nmbs.length; ++i) {
  nmbs[i].addEventListener("click", function () {
    if (!sign) {
      nr1 += nmbs[i].textContent;
      currentInput.textContent = nr1;
    } else {
      nr2 += nmbs[i].textContent;
      currentInput.textContent = nr2;
    }
    console.log(nr1, nr2);
  });
}

for (let i = 0; i < opr.length; ++i) {
  opr[i].addEventListener("click", function () {
    sign = opr[i].textContent;
    currentOutput.textContent = nr1 + " " + sign;
    currentInput.textContent = "";
  });
}

equal.addEventListener("click", function () {
  if (sign == "+") nr1 = Number(nr1) + Number(nr2);
  else if (sign == "-") nr1 -= nr2;
  else if (sign == "%") nr1 %= nr2;
  else if (sign == "*") nr1 *= nr2;
  else nr1 /= nr2;
  sign = "";
  nr2 = "";
  //   nr1 = nr1.toFixed(3);
  currentInput.textContent = nr1;
  nr1 = "";
  currentOutput.textContent = "";
});

aclear.addEventListener("click", function () {
  currentOutput.textContent = "";
  currentInput.textContent = "0";
  nr1 = "";
  nr2 = "";
  sign = "";
});

clear.addEventListener("click", function () {
  currentInput.textContent = currentInput.textContent.slice(0, -1);
  if (!nr2 && !sign) nr1 = currentInput.textContent;
  else if (!nr2 && sign) {
    currentOutput.textContent = currentOutput.textContent.slice(0, -2);
    sign = "";
  } else nr2 = currentInput.textContent;
});

decimal.addEventListener("click", function () {
  if (!sign) {
    nr1 += ".";
    currentInput.textContent = nr1;
  } else {
    nr2 += ".";
    currentInput.textContent = nr2;
  }
});
