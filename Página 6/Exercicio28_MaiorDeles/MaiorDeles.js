// 28) Ler 3 valores (considere que não serão informados valores iguais) e
// escrever o maior deles.

let valor1, valor2, valor3, menorValor, maiorValor;

alert(`Vamos ler 3 valores e informar o maior deles`);

valor1 = parseInt(prompt(`Digite o primeiro valor: `));

maiorValor = valor1;
menorValor = valor1

valor2 = parseInt(prompt(`Digite o segundo valor: `));

if (valor2 > maiorValor) {
    maiorValor = valor2;
}
else if (valor2 < menorValor) {
    menorValor = valor2;
}

while (valor2 == valor1) {
    valor2 = parseInt(prompt(`Valor digitado é igual ao anterior.\n
     Digite um valor diferente: `));
}
if (valor2 > maiorValor) {
    maiorValor = valor2;
}
else if (valor2 < menorValor) {
    menorValor = valor2;
}

valor3 = parseInt(prompt(`Digite o terceiro valor`));
while ((valor3 == valor1) || (valor3 == valor2)) {
    valor3 = parseInt(prompt(`Valor digitado não pode ser igual aos anteriores.\n
    Digite um valor diferente: `));
}
if (valor3 > maiorValor) {
    maiorValor = valor3;
}
else if (valor3 < menorValor) {
    menorValor = valor3;
}

alert(`O maior valor entre os 3 é: ${maiorValor}\n
O menor valor entre os 3 é: ${menorValor}`);