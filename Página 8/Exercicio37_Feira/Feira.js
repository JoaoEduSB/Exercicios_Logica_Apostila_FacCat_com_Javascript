// 37) Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra
// ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total.
// Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a
// quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo
// cliente.

let decisaoMorango, decisaoMacas;
let quantMorango, quantMacas, totalQuilos;
let totalPreco, valorDesconto, precoMorango;
let precoMacas, descontoTotal, descontoMorango, descontoMacas;
let precoMacasOriginal, precoMorangosOriginal, valorTotal;

alert(`Vamos calcular o valor das frutas compradas pelo usuário`);

decisaoMorango = String(prompt(`Você deseja comprar morangos?\n
Digite Sim ou Não: `));

if (decisaoMorango == "Sim") {
    quantMorango = parseInt(prompt(`Quantos quilos de morango você deseja?\n
    Digite a quantidade:`));
} 
else if ((decisaoMorango != "Sim") && (decisaoMorango != "Não")) {
  decisaoMorango = String(prompt(`A informação inserida está incorreta.\n
 Digite novamente: `));
  quantMorango = parseInt(prompt(`Digite a quantidade: `));
}

while (quantMorango <= 0) {
  quantMorango = parseInt(prompt(`A quantidade digitada é inválida, digite novamente:`));
}

if (decisaoMorango != "Sim"){
  quantMorango = 0
}

decisaoMacas = String(prompt(`Você deseja comprar maçãs?\n
Digite Sim ou Não: `));

if (decisaoMacas == "Sim") {
  quantMacas = parseInt(prompt(`Quantos quilos de maçãs você deseja?\n
    Digite a quantidade:`));
} 
else if ((decisaoMacas != "Sim") && (decisaoMacas != "Não")) {
  decisaoMacas = String(prompt(`A informação inserida está incorreta.\n
 Digite novamente: `));
  quantMacas = parseInt(prompt(`Digite a quantidade: `));
}

while (quantMacas <= 0) {
  quantMacas = parseInt(
    prompt(`A quantidade digitada é inválida, digite novamente:`));
}

if (decisaoMacas != "Sim"){
  quantMacas = 0
}

precoMacasOriginal = (quantMacas * 1.8);
precoMorangosOriginal = (quantMorango * 2.5);

if (quantMorango > 5) {
  precoMorango = (quantMorango * 2.2);
  descontoMorango = (precoMorangosOriginal - precoMorango);
} else {
  precoMorango = (quantMorango * 2.5);
}

if (quantMacas > 5) {
  precoMacas = (quantMacas * 1.5);
  descontoMacas = (precoMacasOriginal - precoMacas);
} else {
  precoMacas = (quantMacas * 1.8);
}

descontoTotal = (descontoMorango + descontoMacas);

totalQuilos = (quantMorango + quantMacas);

totalPreco = (precoMorango + precoMacas);

valorTotal = totalPreco

if ((totalQuilos > 8) || (totalPreco > 25)) {
  valorDesconto = (totalPreco * 0.1);
  valorTotal = (totalPreco - valorDesconto);
  valorDesconto = (valorDesconto + descontoTotal);
}
else {
    valorDesconto = 0;
}

if (totalQuilos < 5){
    alert(`Abaixo de 5KG não há desconto.
    O valor a ser pago pelo cliente é: R$${totalPreco.toFixed(2)}`);
}
else if (totalQuilos < 8) {
    alert(`Desconto acima de 5KG e abaixo de 8KG\n
    O valor a ser pago pelo cliente é: R$${totalPreco.toFixed(2)}`);
} 
else{
    alert(`Desconto acima de 8KG ou R$Reais\N
    O valor a ser pago pelo cliente é: R$${valorTotal.toFixed(2)}`);
} 
