const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var number_one;
var number_two;
var conclusion = false;
var soma;

rl.question("Qual será o primeiro número? - R: ", function (a) {
  number_one = a;
  rl.question("Qual será o segundo número? - R: ", function (ans) {
    number_two = ans;
    rl.question("Qual será a operação matemática? - R: ", function (answer) {
      soma = answer;
      conclusion = true;
      if (conclusion) {
        var result;
        var num1 = Number(number_one);
        var num2 = Number(number_two);
        if (soma == "+") {
          result = num1 + num2;
        } else if (soma == "-") {
          result = num1 - num2;
        } else if (soma == "*") {
          result = num1 * num2;
        } else if (soma == "/") {
          result = num1 / num2;
        }
        console.log(`${number_one} ${soma} ${number_two} é igual a: ${result}`);
      }
      rl.close();
    });
  });
});
