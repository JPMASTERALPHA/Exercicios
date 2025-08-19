const readlineSync = require('readline-sync');

let moedas = {"USD": 0.19, "EUR": 0.18, "CAD": 0.25, "GBP": 0.15};
let reais = Number(readlineSync.question(("Digite o valor em Reais: ")));
let moeda = readlineSync.question(("Digite a moeda de troca cambial: "));
console.log(`${moedas[moeda.toUpperCase()]*reais} ${moeda.toUpperCase()}`);
