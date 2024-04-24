// 12) Escreva um algoritmo para ler uma temperatura em graus Fahrenheit,
// calcular e escrever o valor correspondente em graus Celsius:

let temperatura, celsius;

alert("Vamos ler uma temperatura em graus F° e converter para graus Celsius");

temperatura = parseFloat(prompt(`Digite a temperatura: `));

celsius = (temperatura - 32) * (5 / 9);

alert(`${temperatura} graus F° convertidos, é equivalente a: ${celsius} graus C°`);

