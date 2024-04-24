// 13) Faça um algoritmo que leia três notas de um aluno, calcule e escreva a
   // média final deste aluno. Considerar que a média é ponderada e que o peso
   // das notas é 2, 3 e 5.

let nota1, nota2, nota3, media, soma;

alert("Vamos calcular a média ponderada de um aluno ");

nota1 = parseFloat(prompt(`Digite a primeira nota: `));
while ((nota1 < 0) || (nota1 > 10)) {
    nota1 = parseFloat(prompt(`Nota digitada é invalida \n 
    Digite a primeira nota: `));
}

nota2 = parseFloat(prompt(`Digite a segunda nota: `));
while ((nota2 < 0) || (nota2 > 10)) {
    nota2 = parseFloat(prompt(`Nota digitada é invalida \n 
    Digite a segunda nota: `));
}

nota3 = parseFloat(prompt(`Digite a terceira nota: `));
while ((nota3 < 0) || (nota3 > 10)) {
    nota3 = parseFloat(prompt(`Nota digitada é invalida \n 
    Digite a terceira nota: `));
}

soma = (nota1 * 2) + (nota2 * 3) + (nota3 * 5)
media = soma / 10

alert(`A média final do aluno é: ${media}`);