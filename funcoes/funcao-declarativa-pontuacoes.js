function calcularPontuacaoTotal(pontuacoes) {
    let pontuacaoTotal = 0;
    for (let i = 0; i < pontuacoes.length; i ++) {
        pontuacaoTotal += pontuacoes[i];
    }
    console.log("Pontuacao total do jogador:", pontuacaoTotal);
}
// Array de pontuacoes do jogador
const pontuacoesDoJogador = [10, 15, 20, 5, 8];
// Chamando a funcao para calcular a pontuacao total do jogador
calcularPontuacaoTotal(pontuacoesDoJogador);