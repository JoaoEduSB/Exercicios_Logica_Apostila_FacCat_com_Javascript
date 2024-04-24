// 9) Escreva um algoritmo para ler o salário mensal atual de um funcionário
// e o percentual de reajuste. Calcular e escrever o valor do novo salário.

let salarioAtual, reajuste, novoSalario;

alert(`Vamos calcular o reajuste de salário do funcionário`);

salarioAtual = parseFloat(prompt(`Digite o salário atual do funcionário: `));
reajuste = parseFloat(prompt(`Digite o reajuste em % que terá no salário: `));

novoSalario = salarioAtual * (reajuste / 100) + salarioAtual;

alert(`O novo salário do funcionário será: R$${novoSalario}`);
