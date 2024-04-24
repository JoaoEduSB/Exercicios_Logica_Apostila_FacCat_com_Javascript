// 36) Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres
// (considere que as idades dos homens serão sempre diferentes entre si, bem
// como as das mulheres). Calcule e escreva a soma das idades do homem mais
// velho com a mulher mais nova, e o produto das idades do homem mais novo com
// a mulher mais velha.

let idadeHomem1, idadeHomem2, idadeMulher1, idadeMulher2, maisNova, maisVelho, soma;
let produto;

alert(`Vamos calcular as idades de dois homens e duas mulheres`);

idadeHomem1 = parseInt(prompt(`Digite a idade do primeiro homem: `));

maisVelho = idadeHomem1;

idadeHomem2 = parseInt(prompt(`Digite a idade do segundo homem: `));

while (idadeHomem2 == idadeHomem1) {
    idadeHomem2 = parseInt(prompt(`Digite a idade do segundo homem: `));
}

if (idadeHomem2 > maisVelho) {
    maisVelho = idadeHomem2;
}

idadeMulher1 = parseInt(prompt(`Digite a idade da primeira mulher: `));

while ((idadeMulher1 == idadeHomem1) || (idadeMulher1 == idadeHomem2)) {
    idadeMulher1 = parseInt(prompt(`A idade não pode ser igual as idades anteriores\n
    Digite a idade novamente: `));
}

maisNova = idadeMulher1;

idadeMulher2 = parseInt(prompt(`Digite a idade da segunda mulher: `));

while ((idadeMulher2 == idadeHomem1) || (idadeMulher2 == idadeHomem2) || (idadeMulher2 == idadeMulher1)) {
    idadeMulher2 = parseInt(prompt(`A idade não pode ser igual as idades anteriores\n
    Digite a idade novamente: `));
}

if (idadeMulher2 > maisNova) {
    maisNova = idadeMulher1
}

soma = (maisVelho + maisNova);

produto = (idadeHomem1 + idadeHomem2) * (idadeMulher1 + idadeMulher2);

alert(`A soma da idade do homem mais velho com a mulher mais nova é: ${soma}\n
O produto das idades do homem mais novo com a idade da mulher mais velha é: ${produto}`);



