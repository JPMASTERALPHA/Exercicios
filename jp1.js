const readlineSync = require('readline-sync');

let salario = Number(readlineSync.question("Digite o salário anual: "));
let time = Number(readlineSync.question("Digite o tempo de serviço: "));
let pontos = Number(readlineSync.question("Digite a pontuação: "));

let bonus = 0.05*salario;

if (time >= 3 && time <= 5) {bonus = 0.1*salario;}
else if ( time > 5) {bonus = 0.15*salario;}

if ( pontos >= 5 && pontos <= 7) {bonus *= 1.2;}
else if ( pontos >= 8 && pontos <= 10 ) {bonus *= 1.5;}

console.log("Seu bonus é:", bonus);