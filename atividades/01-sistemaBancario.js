/***************************************************** 
Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta; 
*/

var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const name = "Leo";
const full_name = "Leonardo Navas";
const bank = "PicPay";
const agency = "0001";
const account_number = "123456-7";
var saldo = 1533.4;
var new_saldo = saldo - 201.97 - 45.90 + 500.00 - 30 - 150.00;
saldo = new_saldo;

var lines = "\n--------------------------------------\n";
console.log(lines);
console.log(`Olá, ${name}! Bem-vindo ao ${bank}.`);
console.log("\n");
function question() {
  rl.question(
      "O que você deseja fazer hoje? \n0 - Sair \n1 - Consultar saldo \n2 - Fazer Transferência \n3 - Consultar Extrato \n4 - Ver suas informações \nR: ",
      function (answer) {
          if (answer == "1") {
            if (new_saldo) {
              saldo = new_saldo;
            }
            console.log(lines);
            console.log("\n Seu Saldo é: R$ " + saldo);
            console.log(lines);
          } else if (answer == "2") {
            rl.question("Digite o valor da transferência: R$ ", function (value) {
              if (value > saldo) {
                console.log("\n Saldo insuficiente para realizar a transferência.");
                console.log("\n")
                rl.close();
              } else {
                saldo = saldo - value;
                console.log(lines);
                console.log("\n Transferência realizada com sucesso! Seu novo saldo é: R$ " + saldo);
                console.log(lines);
                rl.close();
              }
            });
          } else if (answer == "3") {
            console.log(lines);

            console.log("Saldo atual: R$ " + saldo);
            console.log("Extrato da conta:\n");
            console.log("Transferência para MercadoLivre: R$201.97");
            console.log("Transferência para Netflix: R$ 45.90");
            console.log("Transferência recebida de João: R$ 500.00");
            console.log("Transferência enviada para Pedro: R$ 150.00");
            console.log("Transferência enviada para Posto Ipiranga: R$ 30.00");
            
            console.log("Saldo final do dia: R$ " + new_saldo);
            console.log("\n");

            console.log(lines);
          } else if (answer == "0") {
            console.log("\n Obrigado por usar o nosso sistema bancário. Até a próxima!");
            rl.close();
          } else if (answer == "4") {
            console.log(lines);
            console.log(`Seu nome completo: ${full_name}`);
            console.log(`Banco: ${bank}`);
            console.log(`Agência: ${agency}`);
            console.log(`Número da conta: ${account_number}`);
            console.log(lines)
          }
          question();
      },
    );
}


question();
