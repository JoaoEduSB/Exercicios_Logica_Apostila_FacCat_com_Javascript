// 5) Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela)
// o seu antecessor

let numero, antecessor, sucessor;

alert("Vamos ler um valor e escrever o seu antecessor e o Sucessor ")

numero = parseInt(prompt(`Digite o valor:`));

antecessor = numero - 1;

sucessor = numero + 1;

alert(`O antecessor de ${numero} é ${antecessor} \n 
O sucessor de ${numero} é ${sucessor}`);
