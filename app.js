let userName = prompt("Как вас зовут?");

function showName() {
  let message = `Привет, ${userName}`;
  alert(message);
}
showName();

function sum() {
  let digitOne = +document.getElementById("valueOne").value;
  let digitTwo = +document.getElementById("valueTwo").value;
  let result = digitOne + digitTwo;
  document.getElementById("result").value = result;
}
function diff() {
  let digitOne = +document.getElementById("valueOne").value;
  let digitTwo = +document.getElementById("valueTwo").value;
  let result = digitOne - digitTwo;
  document.getElementById("result").value = result;
}
function mult() {
  let digitOne = +document.getElementById("valueOne").value;
  let digitTwo = +document.getElementById("valueTwo").value;
  if (digitOne & (digitTwo !== 0)) {
    let result = digitOne * digitTwo;
    document.getElementById("result").value = result;
  } else document.getElementById("result").value = "на ноль не умножаю";
}
function div() {
  let digitOne = +document.getElementById("valueOne").value;
  let digitTwo = +document.getElementById("valueTwo").value;
  if (digitOne & (digitTwo !== 0)) {
    let result = digitOne / digitTwo;
    document.getElementById("result").value = result;
  } else document.getElementById("result").value = "на ноль не делю";
}
