let deletes = document.getElementById("delete");
let buttons = document.querySelectorAll("button");
let screen = document.querySelector(".screen");
let history = document.getElementById("history");
screen.innerHTML = 0;
history.innerHTML = "";
let persen = false;
let valOne = [];
let valTwo = [];
var operator = [];
let finalAnswer = 0;

[...buttons].map((x) => {
  x.addEventListener("click", function (e) {
    valTwo.length > 0 ? (deletes.innerHTML = "C") : (deletes.innerHTML = "AC");

    switch (this.innerHTML) {
      case "AC":
        clearDisplay();
        break;

      case "C":
        removeNumber();
        break;

      case "+/-":
        makeNegative();
        break;

      case "%":
        console.log();
        valOne.push(valOne.join("") / 100);
        screen.innerHTML = valOne[valOne.length - 1];
        persen = true;
        break;

      case "x":
        operator.splice(0, 1, "*");
        console.log(operator);
        storeValue();
        break;

      case "/":
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);
        storeValue();
        break;

      case "+":
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);
        storeValue();
        break;

      case "-":
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);
        storeValue();
        break;

      case ".":
        if (screen.innerHTML === null) {
          alert("Harap masukkan number terlebih dahulu!");
        } else if (valOne.includes(".")) {
          alert("Tipe bilangan sudah desimal");
        } else {
          valOne.push(this.innerText);
          screen.innerHTML = valOne.join("");
          console.log(valOne);
        }
        break;

      case "=":
        prosesPerhitungan();
        break;

      default:
        if (valOne.length >= 7) {
          alert("Number terlalu besar");
        } else {
          valOne.push(this.innerText);
          screen.innerHTML = valOne.join("");
        }
        break;
    }
  });
});

// Clear Display
const clearDisplay = () => {
  screen.innerHTML = 0;
  history.innerHTML = "";
  valOne = [];
  valTwo = [];
  operator = [];
};

// Delete Display
const removeNumber = (e) => {
  screen.innerHTML = 0;
  valOne = [];
};

// Make Negative
const makeNegative = () => {
  if (valOne.length < 1) {
    return false;
  } else if (valOne[0] == "-") {
    valOne.shift();
  } else {
    valOne.unshift("-");
  }
  screen.innerHTML = valOne.join("");
};

// Store Value
const storeValue = () => {
  if (valOne.length == 0 && valTwo.length == 0) {
    alert("Masukkan bilangan terlebih dahulu!");
  } else if (valTwo.length > 0) {
    history.innerHTML = valTwo + " " + operator;
  } else if (valTwo.length == 0) {
    if (persen === true) {
      valTwo.push(valOne[valOne.length - 1]);
      valOne = [];
      screen.innerHTML = "";
      history.innerHTML = "";
      history.innerHTML = valTwo + " " + operator;
    } else {
      valTwo.push(valOne.join(""));
      valOne = [];
      screen.innerHTML = "";
      history.innerHTML = "";
      history.innerHTML = valTwo + " " + operator;
    }
  }
  history.innerHTML = valTwo + " " + operator;
};

// Perhitungan
const prosesPerhitungan = () => {
  if (persen === true) {
    history.innerHTML = valTwo + operator + valOne[valOne.length - 1];
    finalAnswer = eval(valTwo + operator + valOne[valOne.length - 1]);
  } else {
    history.innerHTML = valTwo + operator + valOne.join("");
    finalAnswer = eval(valTwo + operator + valOne.join(""));
  }

  screen.innerHTML = finalAnswer;
  valOne = [];

  console.log(valOne);
  valTwo = finalAnswer;
  operator = [];
  deletes.innerHTML = "AC";
};
