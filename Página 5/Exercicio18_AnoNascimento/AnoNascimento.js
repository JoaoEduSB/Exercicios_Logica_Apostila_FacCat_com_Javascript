// 18) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma
// mensagem que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

let numero, antecessor, sucessor;

alert("Vamos verificar se você pode votar ")

anoAtual = parseInt(prompt(`Digite o ano Atual: `));
anoNascimento = parseInt(prompt(`Digite o seu ano de nascimento: `));
while (anoNascimento > anoAtual){
    anoNascimento = parseInt(prompt(`O ano de nascimento não pode ser maior do que o ano atual.\n
     Digite novamente o seu ano de nascimento: `));
}

idadePessoa = (anoAtual - anoNascimento);

if (idadePessoa < 16) {
    alert(`Você tem ${idadePessoa} anos
    \nPortanto você não pode votar`);
}
else if ((idadePessoa <18) || (idadePessoa > 70)){
    alert(`Você tem ${idadePessoa} anos
    \nPortanto para você o voto é opcional`);
}
else {
    alert(`Você tem ${idadePessoa} anos
    \nPortanto você é obrigado a votar`);
}

