// 25) Faça um algoritmo para ler: número da conta do cliente, saldo, débito e
// crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo -
// débito + crédito). Também testar se saldo atual for maior ou igual a zero
// escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo
// Negativo'.

let contaBancaria;
let saldo, saldoAtual, debito, credito;

alert(`Vamos ler os seus dados bancários e exibir se está positivo ou negativo`);

contaBancaria = parseInt(prompt(`Digite o número da sua conta bancária: `));
saldo = parseFloat(prompt(`Digite o seu valor em saldo disponível: `));
debito = parseFloat(prompt(`Digite o seu valor em débito utilizado: `));
credito = parseFloat(prompt(`Digite o seu valor em crédito disponível: `));

saldoAtual = (saldo - debito + credito);

if (saldoAtual >= 0){
    alert(`Valor disponível: ${saldoAtual}\n
    O seu saldo é positivo.`);
}
else {
    alert(`Dívida atual: ${saldoAtual}\n
    O seu saldo é negativo.`);
}
