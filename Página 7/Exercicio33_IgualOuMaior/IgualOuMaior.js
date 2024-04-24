// 33) Ler dois valores e imprimir uma das três mensagens a seguir:
// ‘Números iguais’, caso os números sejam iguais
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let numero1, numero2;

alert(`Vamos ler dois valores e imprimir uma mensagem de acordo com esses valores`);

numero1 = parseInt(prompt(`Digite o primeiro número: `));
numero2 = parseInt(prompt(`Digite o segundo número: `));

if (numero1 == numero2) {
    alert(`${numero1} é igual a ${numero2}`);
}
else if (numero1 > numero2) {
    alert(`${numero1} é maior que ${numero2}`)
}
else {
    alert(`${numero2} é maior que ${numero1}`)
}