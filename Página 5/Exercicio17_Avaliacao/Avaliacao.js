//  17) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média
// aritmética simples e escrever uma mensagem que diga se o aluno foi ou não
// aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado).
// Escrever também a média calculada.

let nota1, nota2;

alert("Vamos ler as notas de um aluno e exibir se ele foi aprovado ");

nota1 = parseFloat(prompt(`Digite a primeira nota:`));
while ((nota1 < 0) || (nota1 > 10)){
    nota1 = parseFloat(prompt(`Nota digita é inválida. Digite novamente: `));
}

nota2 = parseFloat(prompt(`Digite a segunda nota:`));

while ((nota2 < 0) || (nota2 > 10)){
    nota2 = parseFloat(prompt(`Nota digita é inválida. Digite novamente: `));
}

media = (nota1 + nota2) / 2

if (media >= 6){
    alert(`O aluno foi aprovado com média ${media}`);
}
else { 
    alert(`O aluno foi reprovado com média ${media}`);
}