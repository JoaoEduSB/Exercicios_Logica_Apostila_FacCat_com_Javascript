// 35) Escreva um algoritmo que leia o número de litros vendidos e o tipo de
// combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule
// e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro
// da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.

let tipoCombustivel;
let quantLitros, preco, descontoTotal, descontoMin;

alert(`Vamos calcular o valor do preço do combustível de um posto`);

tipoCombustivel = String(prompt(`Escolha o tipo de combustível desejado\n
A - Álcool \n
G - Gasolina \n
Digite o tipo: `));

quantLitros = parseFloat(prompt(`Quantos litros será abastecido? \n
Digite a quantidade: `));

if (tipoCombustivel == "A") {
    if (quantLitros > 20) {
        preco = quantLitros * 2.73;
    }
    else {
        preco = quantLitros * 2.78;
    }
    descontoTotal = (quantLitros * 2.9) - preco;
    descontoMin = quantLitros * 2.9;
}

if (tipoCombustivel == "G") {
    if (quantLitros > 20) {
        preco = quantLitros * 3.1;
    }
    else {
        preco = quantLitros * 3.16;
    }
    descontoTotal = (quantLitros * 3.3) - preco
    descontoMin = quantLitros * 3.3
}

    alert(`Preço a pagar: ${preco.toFixed(2)}\n
    Valor original: ${descontoMin.toFixed(2)}\n
    Desconto total: ${descontoTotal.toFixed(2)}`);