let firstnum = prompt("input the first number");
let operator = prompt("enter + - / *");
let secondnum = prompt("input the second number");
firstnum = parseFloat(firstnum);
secondnum = parseFloat(secondnum);
let result;
if (operator == "+") {
  result = firstnum + secondnum;
} else if (operator == "-") {
  result = firstnum - secondnum;
} else if (operator == "/") {
  result = firstnum / secondnum;
} else {
  result = firstnum * secondnum;
}
alert(result);
