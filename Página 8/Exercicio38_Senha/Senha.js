// 38) Faça um algoritmo para ler um número que é um código de usuário. Caso
// este código seja diferente de um código armazenado internamente no
// algoritmo (igual a 1234) deve ser apresentada a mensagem ‘Usuário inválido!’.
// Caso o Código seja correto, deve ser lido outro valor que é a senha. Se esta
// senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha
// incorreta’. Caso a senha esteja correta, deve ser mostrada a mensagem
// ‘Acesso permitido’.

let login, senha;

alert(`Vamos validar o acesso do usuário: `);

login = String(prompt(`Digite o seu login: `));

while (login != "1234") {
    login = String(prompt(`Usuário inválido\n
    Digite novamente o usuário: `));
}

senha = String(prompt(`Digite a sua senha: `));

while (senha != "9999") {
    senha = String(prompt(`Senha incorreta.\n
    Digite novamente a senha: `));
}

if (login == "1234" && senha == "9999") {
    alert(`Acesso permitido.`)
}
else {
    alert(`Acesso negado.`)
}