// 42) Uma empresa quer verificar se um empregado está qualificado para a
// aposentadoria ou não. Para estar em condições, um dos seguintes requisitos
// deve ser satisfeito:
// - Ter no mínimo 65 anos de idade.
// - Ter trabalhado no mínimo 30 anos.
// - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.

// Com base nas informações acima, faça um algoritmo que leia: o número do
// empregado (código), o ano de seu nascimento e o ano de seu ingresso na
// empresa. O programa deverá escrever a idade e o tempo de trabalho do
// empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.

let codigoFuncionario;
let anoNasc, anoIngresso, anoAtual, totalAnos, idade;

alert(`Vamos avaliar se o empregado pode requerer a aposentadoria`);

codigoFuncionario = String(prompt(`Digite o seu código de funcionário (número): `));
anoNasc = parseInt(prompt(`Digite o seu ano de nascimento: `));
anoIngresso = parseInt(prompt(`Digite o seu ano de ingresso na empresa : `));
anoAtual = parseInt(prompt(`Digite o ano atual: `));

totalAnos = anoAtual - anoIngresso;

idade = anoAtual - anoNasc;

if (idade >= 65) {
    alert("Requerer aposentadoria do funcionário.");
}
else if (totalAnos >= 30) {
    alert("Requerer aposentadoria do funcionário.");
}
else if ((idade >=60) && (totalAnos >= 25)) {
    alert("Requerer aposentadoria do funcionário.");
}
else {
    alert(`Não requerer aposentadoria do funcionário.`);
}

alert(`O funcionário tem: ${idade} anos de idade e ${totalAnos} anos de empresa.`);