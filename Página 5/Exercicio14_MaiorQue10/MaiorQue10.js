// 14) Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for
// maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!

let numero;

alert("Vamos ler um número e dizer se é maior ou menor que 10");

numero = parseInt(prompt(`Digite o número: `));

if (numero == 10){
    alert(`O número ${numero} é igual 10`);
}
else if (numero > 10){
    alert(`O número ${numero} é maior que 10`);
}
else{
    alert(`O número ${numero} é menor que 10`);
}
