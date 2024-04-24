// 29) Ler 3 valores (considere que não serão informados valores iguais) e
// escrever a soma dos 2 maiores.

let valor1, valor2, valor3, menorValor, maiorValor, segundoValor, soma;

alert(`Vamos ler 3 valores e informar a soma dos 2 maiores`);

valor1 = parseInt(prompt(`Digite o primeiro valor: `));

maiorValor = valor1;
menorValor = valor1

valor2 = parseInt(prompt(`Digite o segundo valor: `));

if (valor2 > maiorValor) {
    maiorValor = valor2;
}
if (valor2 < menorValor) {
    menorValor = valor2;
}

while (valor2 == valor1) {
    valor2 = parseInt(prompt(`Valor digitado é igual ao anterior.\n
     Digite um valor diferente: `));
}
if (valor2 > maiorValor) {
    maiorValor = valor2;
}
if (valor2 < menorValor) {
    menorValor = valor2;
    segundoValor = valor2;
}

valor3 = parseInt(prompt(`Digite o terceiro valor`));

if (valor3 > maiorValor) {
    segundoValor = maiorValor
    maiorValor = valor3;
}

if (valor3 < menorValor) {
    segundoValor = menorValor
    menorValor = valor3;
}

if ((valor3 < maiorValor) && (valor3 > menorValor)) {
    segundoValor = valor3
}


while ((valor3 == valor1) || (valor3 == valor2)) {
    valor3 = parseInt(prompt(`Valor digitado não pode ser igual aos anteriores.\n
    Digite um valor diferente: `));
}

if (valor3 > maiorValor) {
    segundoValor = maiorValor
    maiorValor = valor3;
}

if (valor3 < menorValor) {
    segundoValor = menorValor
    menorValor = valor3;
}

if ((valor3 < maiorValor) && (valor3 > menorValor)) {
    segundoValor = valor3
}

soma = maiorValor + segundoValor

alert(`A soma dos dois maiores valores é: ${soma}`);