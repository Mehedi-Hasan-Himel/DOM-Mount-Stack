let number = document.getElementById("number");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

plus.addEventListener("click", function () {
  number.innerText = Number(number.innerText) + 1;
});

minus.addEventListener("click", function () {
  if (number.innerText > 0) {
    number.innerText = Number(number.innerText) - 1;
  }
});
