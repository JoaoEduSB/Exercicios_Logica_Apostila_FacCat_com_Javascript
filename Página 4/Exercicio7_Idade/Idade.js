// 7) Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses
// e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar
// ano com 365 dias e mês com 30 dias

let idade, mes, dias, idadeTotal;

alert("Vamos calcular a sua idade em anos, meses e dias");

idade = parseInt(prompt(`Digite a sua idade em anos: `));
mes = parseInt(prompt(`Digite quantos meses já passaram do seu último mesversário: `));
dias = parseInt(prompt(`Digite quantos dias passou do seu último mesversário: `));

idadeTotal = idade * 365 + mes * 30 + dias

alert(`Você completou ${idadeTotal} dias de vida.`);