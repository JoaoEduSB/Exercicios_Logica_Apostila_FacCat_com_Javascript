// 40) Faça um algoritmo para ler: a descrição do produto (nome), a quantidade
// adquirida e o preço nitário. Calcular e escrever o total (total = quantidade
// adquirida * preço unitário), o desconto e o total a pagar (total a pagar =
// total - desconto), sabendo-se que:
// - Se quantidade <= 5 o desconto será de 2%
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
// - Se quantidade > 10 o desconto será de 5%

let nomeProduto;
let quantProduto;
let precoUnit, precoTotal, desconto, totalPagar;

alert(`Vamos ler o nome do produto, quantidade e valor para calcular\n
o valor total da compra do usuário`);

nomeProduto = String(prompt(`Digite o nome do produto desejado`));
quantProduto = parseInt(prompt(`Digite a quantidade desejada: `));
precoUnit = parseFloat(prompt(`Digite o preço unitário desse produto: `));

precoTotal = (quantProduto * precoUnit);

if (quantProduto <= 5) {
    desconto = (precoTotal * 0.02);
}
else if (quantProduto <= 10) {
    desconto = (precoTotal * 0.03);
}
else {
    desconto = (precoTotal * 0.05);
}

totalPagar = (precoTotal - desconto);

alert(`O valor a pagar é: R$${totalPagar.toFixed(2)}`);

