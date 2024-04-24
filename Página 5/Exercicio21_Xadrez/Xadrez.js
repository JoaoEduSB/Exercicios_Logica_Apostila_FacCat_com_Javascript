// 21) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere
// apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas,
// sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo
// pode iniciar em um dia e terminar no dia seguinte.

let duracao, horaInicio, horaFinal;

alert(`Vamos ler a hora do início e do fim de um jogo de xadrez e mostrar a duração. Digite apenas números inteiros de 0 até 24.`);

horaInicio = parseInt(prompt(`Digite a hora de início do jogo: `));
horaFinal = parseInt(prompt(`Digite a hora do fim do jogo: `));

duracao = (horaFinal - horaInicio);

if (duracao <= 0){
    duracao += 24 
}

alert(`O jogo durou: ${duracao} horas.`);