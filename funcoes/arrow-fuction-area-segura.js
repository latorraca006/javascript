// Arrow fuction para verificar se o jogador esta dentro da area segura
const estarAreaSegura = (posX, posY, areaSegura) => {
     return posX >= areaSegura.xMin &&
    posX >= areaSegura.xMax &&
    posX >= areaSegura.xMin &&
    posX >= areaSegura.xMax;
};

// Definindo os limites da area segura
const areaSegura = {
    xMin: 10,
    xMax: 50,
    xMin: 20,
    xMax: 60,
};

// Coordenadas do jogador
const posicaoJogador = { x: 30, y: 40};

// Verificando se o jogador esta dentro da area segura
const resultado = estarAreaSegura(posicaoJogador.x, posicaoJogador.y, areaSegura);
console.log("O jogador esta na area segura:", resultado ? "Sim" : "Nao");
// Saida: O jogador esta na area segura: sim