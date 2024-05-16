// Funcao de expressao para gerar um numero aleatorio entre um intervalo especifico
const gerarNumeroAleatorio = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Chamando a funcao para gerar um numero aleatorio entre 1 e 100
const numeroAleatorio = gerarNumeroAleatorio(1, 100);
console.log("Numero aleatorio:", numeroAleatorio);