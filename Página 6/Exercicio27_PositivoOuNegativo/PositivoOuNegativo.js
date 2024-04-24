// 27) Ler um valor e escrever se é positivo, negativo ou zero.

let numero;

alert(`Vamos verificar se o valor é positivo, negativo ou zero e exibir`);

numero = parseInt(prompt(`Digite um número: `));

if (numero == 0) {
    alert(`O número ${numero} é igual a zero`);
}
else if (numero > 0) {
    alert(`O número ${numero} é positivo`);
}
else {
    alert(`O número é ${numero} é negativo`);
}