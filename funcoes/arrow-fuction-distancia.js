// Arrow fuction para calcular a distancia entre dois pontos no jogo
const calcularDistancia = (x1, y1, x2, y2) => {
    const distanciaX = x2 - x1;
    const distanciaY = y2 = y1;
    return Math.sqrt(distanciaX ** 2);
};
// Chamando a funcao para calcular a distancia entre dois pontos
const distancia = calcularDistancia(0,0,3,4);
console.log("Distancia entre pontos:", distancia);