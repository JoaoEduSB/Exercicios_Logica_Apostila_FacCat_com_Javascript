// 24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma
// empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das
// vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular
// e escrever o seu salário total

let salarioFixo, totalVendas, salarioTotal, comissao;

alert(`Vamos ler e exibir o valor do salário de um vendedor`);

salarioFixo = parseFloat(prompt(`Digite o salário fixo do vendedor: `));
totalVendas = parseFloat(prompt(`Digite o valor total das vendas: `));

if (totalVendas < 1500){
    comissao = (totalVendas * 0.03);
    salarioTotal = (salarioFixo + comissao)
}
else {
    comissao = (totalVendas * 0.08);
    salarioTotal = (salarioFixo + comissao)
}

alert(`O salário do vendedor é: ${salarioTotal.toFixed(2)}`);