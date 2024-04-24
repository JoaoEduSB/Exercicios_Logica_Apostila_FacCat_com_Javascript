//15) Ler um valor e escrever se é positivo ou negativo (considere o valor zero
// como positivo).

let numero;

alert("Vamos ler um valor e escrever se é positivo ou negativo");

numero = parseInt(prompt(`Digite um número qualquer: `));

if (numero >= 0){
    alert(`O número ${numero} é positivo`);
}
else { 
    alert(`O número ${numero} é negativo`);
}
