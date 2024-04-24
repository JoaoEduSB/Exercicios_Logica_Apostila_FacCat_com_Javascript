// 11) Uma revendedora de carros usados paga a seus funcionários vendedores
// um salário fixo por mês, mais uma comissão também fixa para cada carro
// vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um
// algoritmo que leia o número de carros por ele vendidos, o valor total de
// suas vendas, o salário fixo e o valor que ele recebe por carro vendido.
// Calcule e escreva o salário final do vendedor.

let quantCarro;
let valorTotal, salarioFixo, salarioTotal, comissaoValor, comissaoFixa;

alert(`Vamos calcular o valor do salário dos vendedores`);

quantCarro = parseFloat(prompt(`Digite quantos carros foram vendidos pelo funcionário: `));
valorTotal = parseFloat(prompt(`Digite o valor total vendido por ele: `));
salarioFixo = parseFloat(prompt(`Digite o salário fixo do funcionário: `));
comissaoFixa = parseFloat(prompt(`Digite a comissão recebida por carro vendido: `));

comissaoValor = valorTotal * 0.05;
comissaoFixa = comissaoFixa * quantCarro;

salarioTotal = salarioFixo + comissaoFixa + comissaoValor;

alert(`O salário total do funcionário é: ${salarioTotal}`);
