// 22) A jornada de trabalho semanal de um funcionário é de 40 horas. O
// funcionário que trabalhar mais de 40 horas receberá hora extra, cujo
// cálculo é o valor da hora regular com um acréscimo de 50%.
// Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o
// salário por hora e escreva o salário total do funcionário, que deverá ser
// acrescido das horas extras, caso tenham sido trabalhadas (considere que o
// mês possua 4 semanas exatas).

let horasTrab, horasExtrasTotais;
let valorHora, salarioRegular, valorHoraExtra, salarioTotal;

alert(`Vamos calcular o salário de um funcionário em um mês trabalhado`);
horasTrab = parseInt(prompt(`Digite o número de horas que você trabalhou: `));

valorHora = parseFloat(prompt(`Digite o valor recebido por hora trabalhada: `));

if (horasTrab < 160){
    salarioRegular = (160 * valorHora); 
}
else {
    salarioRegular = (160 * valorHora);
    horasExtrasTotais = horasTrab - 160;
    valorHoraExtra = horasExtrasTotais * (valorHora * 0.5);
}

salarioTotal = (salarioRegular + valorHoraExtra);

alert(`O salário do funcionário é: ${salarioTotal.toFixed(2)}`);