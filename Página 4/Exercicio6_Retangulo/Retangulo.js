// 6) Escreva um algoritmo para ler as dimensões de um retângulo (base e
// altura), calcular e escrever a área do retângulo.

let base, altura, retangulo;

alert(`Vamos ler, calcular e exibir a área de um retângulo`);

base = parseInt(prompt(`Digite a base do retângulo em metros: `));
altura = parseInt(prompt(`Digite a altura do retângulo em metros: `));

retangulo = base * altura;

alert(`A área do retângulo é: ${retangulo}m²`);
