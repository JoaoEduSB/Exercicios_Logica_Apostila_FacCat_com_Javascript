// 10) O custo de um carro novo ao consumidor é a soma do custo de fábrica com
// a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
// Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%,
// escrever um algoritmo para ler o custo de fábrica de um carro, calcular e
// escrever o custo final ao consumidor.

let custoCarro, valorFinal;

alert(`Vamos calcular o valor de um veículo para o consumidor`);

custoCarro = parseInt(prompt(`Digite o valor de custo da fábrica para um carro: `));

valorFinal = custoCarro * 0.73 + custoCarro;

alert(`O valor final do carro para o consumidor é: ${valorFinal}`);