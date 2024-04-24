// 41) Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3
// verificações e a média dos exercícios que fazem parte da avaliação.
// Calcular a média de aproveitamento

let nota1, nota2, nota3, notaMediaEx, mediaAproveitamento;

alert(`Vamos ler as 3 notas de um aluno e a média dos seus exercícios`);

nota1 = parseFloat(prompt(`Digite a primeira nota: `));
while ((nota1 < 0) || (nota1 > 10)) {
    nota1 = parseFloat(prompt(`Nota inserida é inválida.\n
    Digite novamente a primeira nota: `));
}

nota2 = parseFloat(prompt(`Digite a segunda nota: `));
while ((nota2 < 0) || (nota2 > 10)) {
    nota2 = parseFloat(prompt(`Nota inserida é inválida.\n
    Digite novamente a segunda nota: `));
}

nota3 = parseFloat(prompt(`Digite a terceira nota: `));
while ((nota3 < 0) || (nota3 > 10)) {
    nota3 = parseFloat(prompt(`Nota inserida é inválida.\n
    Digite novamente a terceira nota: `));
}

notaMediaEx = parseFloat(prompt(`Digite a sua nota média dos exercícios: `));
while ((notaMediaEx < 0) || (notaMediaEx > 10)) {
    notaMediaEx = parseFloat(prompt(`Nota inserida é inválida.\n
    Digite novamente a sua nota de exame: `));
}

mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + notaMediaEx) / 7;

if (mediaAproveitamento >= 9.0) {
    alert(`O aluno foi avaliado no conceito A com média: ${mediaAproveitamento.toFixed(1)}`);
}
else if (mediaAproveitamento >= 7.5) {
    alert(`O aluno foi avaliado no conceito B com média: ${mediaAproveitamento.toFixed(1)}`);
}
else if (mediaAproveitamento >= 6.0) {
    alert(`O aluno foi avaliado no conceito C com média: ${mediaAproveitamento.toFixed(1)}`);
}
else {
    alert(`O aluno foi avaliado no conceito D com média: ${mediaAproveitamento.toFixed(1)}`);
}
